import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import Restaurante from "../pages/Restaurante/Restaurante";

import LoginPage from "../pages/LoginPage/LoginPage";
import Profile from "../pages/Profile/Profile";
import SignupPage from "../pages/SignUpPage/SignUpPage";
import RegisterAddres from "../pages/RegisterAddres/RegisterAddres";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/restaurante" element={<Restaurante />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/adicionar-endereco" element={<RegisterAddres />} />
        {/* <Route path ="" element={""}/> */}
      </Routes>
    </BrowserRouter>
  );
};
export default Router;

