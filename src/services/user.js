import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";
import { goToHome } from "../router/coordinator";

export const login = (body, clear, navigate /* setRightButtonText, setIsLoading */) => {
  /* setIsLoading(true) */
  axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
      console.log("Deu certo", res);
      localStorage.setItem("token", res.data.token);
      clear();
      goToHome(navigate);
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
      console.log("Deu certo", res);
      alert("Cadastro realizado com sucesso");
      localStorage.setItem("token", res.data.token);
      clear();
      goToHome(navigate);
      /* setRightButtonText("Logout"); */
    })
    .catch((err) => {
      console.log("Deu erro", err.response);
      alert("Erro no cadastro!", err.response.data.message);
    });
};