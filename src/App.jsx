import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Landing from './pages/Landing';
import ShoppingPage from './pages/ShoppingPage';
import CollectionsPage from './pages/CollectionsPage';
import ProductPage from './pages/ProductPage'
import '@fortawesome/fontawesome-free/css/all.min.css';

// Admin
import Admin from "./layouts/Admin.jsx";

// Donor
import DonorDashboard from './pages/donor/Dashboard';
import DonorRegistrationForm from './components/forms/DonorRegistrationForm';

// Recipient
import RecipientDashboard from './pages/recipient/Dashboard';
import RecipientRegistrationForm from './components/forms/RecipientRegistrationForm';

// Volunteer
import VolunteerDashboard from './pages/volunteer/Dashboard';
import VolunteerRegistrationForm from './components/forms/VolunteerRegistrationForm';
import Login from './pages/Login';
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from './context/AuthContext';

function App() {
  const [popupType, setPopupType] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = (type) => {
    if (type === '' && isOpen){
      setPopupType(type);
      setIsOpen(!isOpen);
    } else if (type !== '' && isOpen) {
      setPopupType(type);
    } else {
      setPopupType(type);
      setIsOpen(!isOpen);
    }
  };
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={
            <Landing 
                        isOpen={isOpen}
                        popupType={popupType}
                        setPopupType = {setPopupType}
                        togglePopup={togglePopup}
                />} />
          <Route path="/shop" element={<ShoppingPage/>} />
          <Route path="/shop/collection/:category"  element={<CollectionsPage/>} />
          <Route path="/shop/collection/:category/:product/:productid"  element={<ProductPage/>} />
          
          {/* Admin */}
          <Route path="/admin/*" element={<ProtectedRoute roles={['admin']}><Admin /></ProtectedRoute>} />

          {/* Donor */}
          <Route path="/donor/dashboard" element={<ProtectedRoute roles={['donor']}><DonorDashboard /></ProtectedRoute>} />
          <Route path="/register/donor" element={<DonorRegistrationForm />} />

          {/* Recipient */}
          <Route path="/recipient/dashboard" element={<ProtectedRoute roles={['recipient']}><RecipientDashboard /></ProtectedRoute>} />
          <Route path="/register/recipient" element={<RecipientRegistrationForm />} />

          {/* Volunteer */}
          <Route path="/volunteer/dashboard" element={<ProtectedRoute roles={['volunteer']}><VolunteerDashboard /></ProtectedRoute>} />
          <Route path="/register/volunteer" element={<VolunteerRegistrationForm />} />

          {/* Auth */}
          <Route path="/login" element={<Login />} />

          {/* Add other routes here */}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;