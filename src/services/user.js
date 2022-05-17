import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";
import { goToHome, goToRegistrarEndereço } from "../router/coordinator";

export const login = (
  body,
  clear,
  navigate /* setRightButtonText, setIsLoading */
) => {
  /* setIsLoading(true) */
  axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
      console.log("Deu certo", res);
      localStorage.setItem("token", res.data.token);
      if (res.data.user.hasAddress === true){
        navigate.push("/")
        /* goToHome(navigate); */
      } else {
        navigate.push("user/adicionar-endereco")
      }
      clear();
      
      /* setRightButtonText("Logout"); */
      /* setIsLoading(false) */
    })
    .catch((err) => {
      console.log("Deu erro", err);
      alert(err.response.data.message);
      /*  setIsLoading(false) */
    });
};

export const signUp = (body, clear, navigate /* setRightButtonText */) => {
  axios
    .post(`${BASE_URL}/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      console.log("Deu certo", res.data);
      alert("Cadastro realizado com sucesso");
      clear();
      /* goToRegistrarEndereço(navigate); */
      /* setRightButtonText("Logout"); */
    })
    .catch((err) => {
      console.log("Deu erro", err.response);
      alert("Erro no cadastro!", err.data);
    });
};

//requisição para registrar endereço 
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
