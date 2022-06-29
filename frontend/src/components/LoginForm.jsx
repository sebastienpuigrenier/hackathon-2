import React, { useContext, useState } from "react";
import { api } from "@services/services";

import ExportContext from "../contexts/Context";
import "../styles/Home.css";

function LoginForm() {
  const { setIsLog } = useContext(ExportContext.Context);

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
      .then(() => {
        setIsLog(true);
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
    <form onSubmit={handleSubmitLogin} className="container-loginForm">
      <div>
        <label htmlFor="email">
          <p>Email</p>
          <input
            type="email"
            name="email"
            value={loginValue.email}
            onChange={handleChangeLogin}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          <p>Password</p>
          <input
            type="password"
            name="password"
            value={loginValue.password}
            onChange={handleChangeLogin}
          />
        </label>
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
}

export default LoginForm;
