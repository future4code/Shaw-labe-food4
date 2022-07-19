import React from "react";

// mudar nome das funçoes

export const goToHome = (navigate) => {
    navigate("/")
}
export const goToRestaurante = (navigate,id) => {
    navigate(`/restaurante/${id}`)
}
export const goToAddProduct = (navigate,id,product) => {
    navigate(`/restaurante/${id}/${product}`)
}
export const goToLoginPage = (navigate) => {
    navigate("/login")
}
export const goToSignupPage = (navigate) => {
    navigate("/signup")
}
export const goToProfile = (navigate) => {
    navigate("/user/profile")
}
export const goToDetailsPage = (navigate, id) => {
    navigate(`/restaurante/details/${id}`) 
}
export const goToRegistrarEndereço = (navigate) => {
    navigate("/adicionar-endereco")
}
export const goToCartPage = (navigate) => {
    navigate("/cart")
}
export const goToBack = (navigate) => {
    navigate(-1)
}
export const goToEdditProfile = (navigate) => {
    navigate("/user/profile/eddit-profile")
}



