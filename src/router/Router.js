import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import Restaurante from "../pages/Restaurante/Restaurante";

import LoginPage from "../pages/LoginPage/LoginPage";
import Profile from "../pages/Profile/Profile";
import SignupPage from "../pages/SignUpPage/SignUpPage";
import RegisterAddres from "../pages/RegisterAddres/RegisterAddres";
import CartPage from "../pages/cartPage/CartPage"

const Router = () => {
  return (
   
      <Routes>
        <Route index element={<Home />} />
        <Route path="/restaurante" element={<Restaurante />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user/signup" element={<SignupPage />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/adicionar-endereco" element={<RegisterAddres />} />
        {/* <Route path ="" element={""}/> */}




        <Route path="/cart" element={<CartPage/>} />
      </Routes>
    
  );
};
export default Router;

