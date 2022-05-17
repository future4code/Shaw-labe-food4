import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import Restaurante from "../pages/Restaurante/Restaurante";

import LoginPage from "../pages/LoginPage/LoginPage";
import Profile from "../pages/Profile/Profile";
import SignupPage from "../pages/SignUpPage/SignUpPage";
import RegisterAddres from "../pages/RegisterAddres/RegisterAddres";
import ProfileEdditPage from "../pages/Profile/ProfileEdditPage";
import AddresEdditPage from "../pages/Profile/AddresEdditPage";


const Router = () => {
  return (
   
      <Routes>
        <Route index element={<Home />} />
        <Route path="/restaurante/:id" element={<Restaurante />} />
        <Route path="/restaurante/:id/:produto" element={<Restaurante />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/profile/eddit-profile" element={<ProfileEdditPage/>} />
        <Route path="/user/profile/eddit-address" element={<AddresEdditPage/>} />
        <Route path="/user/adicionar-endereco" element={<RegisterAddres />} />
        <Route path="/adicionar-endereco" element={<RegisterAddres />} />
      </Routes>
    
  );
};
export default Router;

