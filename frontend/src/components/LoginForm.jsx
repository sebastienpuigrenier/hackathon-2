import React, { useContext } from "react";
import ExportContext from "../contexts/Context";
import "../styles/Home.css";

function LoginForm() {
  const { isLog, setIsLog } = useContext(ExportContext.Context);

  console.warn(isLog + setIsLog);

  return (
    <div className="container-loginForm">
      <form action="" method="post" className="">
        <div>
          <label htmlFor="email">
            <p>Email</p>
            <input type="email" />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            <p>Password</p>
            <input type="password" />
          </label>
        </div>
        <div>
          <button type="button">Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
