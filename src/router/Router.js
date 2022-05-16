import React from "react";
import { Routes, Route,BrowserRouter} from 'react-router-dom'
import Home from "../pages/HomePage/Home"
import Restaurante from "../pages/Restaurante/Restaurante";
import LoginPage from "../pages/LoginPage/LoginPage"
import EditarCadastro from "../pages/SignUpPage/SignUpPage"
import SignupPage from "../pages/SignUpPage/SignUpPage"

const Router =()=>{

    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path ="/restaurante" element={<Restaurante/>}/>
                <Route path ="/login" element={<LoginPage/>}/>
                <Route path ="/user/signup" element={<SignupPage/>}/>
                <Route path ="/user/editar-cadastro" element={<EditarCadastro/>}/>
                {/* <Route path ="" element={""}/> */}
            </Routes>
        </BrowserRouter>
    )
}
 export default Router