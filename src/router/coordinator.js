import React from "react";



// mudar nome das funçoes


export const goToHome = (navigate) => {
    navigate("/")
}
export const goToRestaurante = (navigate) => {
    navigate("/restaurante")
}

export const goToLoginPage = (navigate) => {
    navigate("/login")
}
export const goToSignupPage = (navigate) => {
    navigate("/user/signup")
}

export const goToEditarCadastro = (navigate) => {
    navigate("/user/editar-cadastro")
}

export const goToDetailsPage = (navigate, id) => {
    navigate(`/restaurante/details/${id}`)
}
export const goToBack = (navigate) => {
    navigate(-1)
}

export const goToRegistrarEndereço = (navigate) => {
    navigate("user/adicionar-endereco")
}
