import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const ProtectedRoute = ({ childern }) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to="/" />;
  } else {
    return childern;
  }
};

export default ProtectedRoute;
