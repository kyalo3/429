import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const formData = new URLSearchParams();
      formData.append('username', email);
      formData.append('password', password);

      // 1. Get the token
      const tokenResponse = await axios.post('http://localhost:8000/auth/token', formData, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });

      const { access_token, token_type } = tokenResponse.data;
      const token = `${token_type} ${access_token}`;
      
      setUserToken(token);
      localStorage.setItem('userToken', JSON.stringify(token));
      
      // 2. Get the current user's data using the token
      const userResponse = await axios.get('http://localhost:8000/users/me', {
        headers: { Authorization: token },
      });

      const user = userResponse.data;
      setCurrentUser(user);
      localStorage.setItem('user', JSON.stringify(user));

      console.log('Login successful, user:', user);
      return user; // Return user data on successful login

    } catch (error) {
      console.error('Login failed:', error);
      if (error.response) {
        console.error('Error response:', error.response.data);
      }
      // Clear out any stale data on failed login
      signOut();
      throw error; // Re-throw the error to be caught by the form
    }
  };

  const signOut = () => {
    setCurrentUser(null);
    setUserToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('userToken');
    console.log('User signed out');
    navigate('/login');
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('userToken');
    if (storedUser && storedToken) {
      setCurrentUser(JSON.parse(storedUser));
      setUserToken(JSON.parse(storedToken));
      // Set the default authorization header for all subsequent axios requests
      axios.defaults.headers.common['Authorization'] = JSON.parse(storedToken);
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, userToken, login, signOut, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
