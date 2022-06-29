import React, { useContext } from "react";
import ExportContext from "../contexts/Context";
import "../styles/Home.css";

function LoginForm() {
  const { isLog, setIsLog } = useContext(ExportContext.Context);

  console.warn(isLog + setIsLog);

  return (
    <div className="container-loginForm">
      <form action="" method="post" className="">
        <div className="form">
          <label htmlFor="email">
            <input type="email" placeholder="MAIL" className="input" />
          </label>
          <label htmlFor="password">
            <input type="password" placeholder="PASSWORD" className="input" />
          </label>
        </div>
        <div>
          <button type="button" className="button-login">
            LOG IN
          </button>
          <p className="forgot-password">Mot de passe oublié</p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
