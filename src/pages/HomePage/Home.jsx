import React from "react";
import { useNavigate } from "react-router-dom";
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
    </div>
  );
};

export default Home;
