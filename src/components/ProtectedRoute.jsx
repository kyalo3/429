import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import PageChange from "./PageChange/PageChange.jsx";

const ProtectedRoute = ({ children, roles }) => {
  const { currentUser, loading } = useContext(AuthContext);

  if (loading) {
    // While checking for authentication, show a loading indicator.
    return <PageChange />;
  }

  if (!currentUser) {
    // If the user is not logged in, redirect them to the login page.
    return <Navigate to="/login" />;
  }

  // If the route requires specific roles and the user's role does not match,
  // redirect them to the homepage.
  if (roles && !roles.includes(currentUser.user_type)) {
    return <Navigate to="/" />;
  }

  // If the user is authenticated and has the correct role, render the component.
  return children;
};

export default ProtectedRoute;
