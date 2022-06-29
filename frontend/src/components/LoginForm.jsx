import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "@services/services";

import ExportContext from "../contexts/Context";
import "../styles/Home.css";

function LoginForm() {
  const navigate = useNavigate();
  const { setIsLog, setUserContext, userContext } = useContext(
    ExportContext.Context
  );

  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const ENDPOINT = "/auth";
    api
      .post(
        ENDPOINT,
        {
          email: loginValue.email,
          password: loginValue.password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        setIsLog(true);
        setUserContext({
          ...userContext,
          email: res.data.email,
          firstname: res.data.firstname,
          lastname: res.data.lastname,
          site: res.data.site,
        });
        navigate("/board");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChangeLogin = (event) => {
    setLoginValue({
      ...loginValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="container-loginForm">
      <form onSubmit={handleSubmitLogin}>
        <div className="form">
          <label htmlFor="email">
            <input
              type="email"
              placeholder="MAIL"
              className="input"
              name="email"
              value={loginValue.email}
              onChange={handleChangeLogin}
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              placeholder="PASSWORD"
              className="input"
              name="password"
              value={loginValue.password}
              onChange={handleChangeLogin}
            />
          </label>
        </div>
        <div>
          <button type="submit" className="button-login">
            LOG IN
          </button>
          <p className="forgot-password">Mot de passe oublié</p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
