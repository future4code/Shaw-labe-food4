import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { goToLoginPage } from "../../router/coordinator";

const Home = () => {
  const navigate = useNavigate();

  const onClickLogin = () => {
    goToLoginPage(navigate);
  };

  return (
    <div>
      <div>Home</div>
      <button onClick={onClickLogin}>LOGIN</button>
      <Footer/>
    </div>
  );
};

export default Home;
