import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";
import { goToHome, goToRegistrarEndereço } from "../router/coordinator";


export const login = (body, clear, navigate) => {
  axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
      console.log("Deu certo", res.data);
      localStorage.setItem("token", res.data.token);
      if (res.data.user.hasAddress === true) {
        goToHome(navigate)
      } else {
        goToRegistrarEndereço(navigate)
      }
      clear();
    })
    .catch((err) => {
      console.log("Deu erro", err);
      alert(err.response.data.message);
    });
};

//Requisição para criar um login e ir para a criação de endereços
export const signUp = (body, clear, navigate) => {
  axios
    .post(`${BASE_URL}/signup`, body)
    .then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      alert("Cadastro realizado com sucesso");
      clear();
      goToRegistrarEndereço(navigate);
    })
    .catch((err) => {
      console.log("Deu erro", err.response);
      alert("Erro no cadastro!", err.data);
    });
};

//Requisição para registrar endereço
export const registerAddres = (body, clear, navigate) => {
  axios
    .put(`${BASE_URL}/address`, body, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log("Deu certo", res);
      alert(res.data);
      goToHome(navigate);
      clear();
    })
    .catch((err) => {
      alert(err);
    });
};
