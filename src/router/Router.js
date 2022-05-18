import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import Restaurante from "../pages/Restaurante/Restaurante";
import LoginPage from "../pages/LoginPage/LoginPage";
import Profile from "../pages/Profile/Profile";
import SignupPage from "../pages/SignUpPage/SignUpPage";
import RegisterAddres from "../pages/RegisterAddres/RegisterAddres";
import CartPage from "../pages/cartPage/CartPage"
import ProfileEdditPage from "../pages/Profile/ProfileEdditPage";


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
        <Route path="adicionar-endereco" element={<RegisterAddres />} />
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
    
  );
};
export default Router;

