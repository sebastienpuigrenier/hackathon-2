import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Error404() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = setTimeout(() => {
      navigate("/");
    }, 15000);
    return () => {
      clearTimeout(redirect);
    };
  }, []);

  function home() {
    navigate("/");
  }

  return (
    <div>
      <p>Page non trouvée, vous allez être redirigé vers la home</p>
      <button className="button404" onClick={() => home()} type="submit">
        Ou cliquez ici !
      </button>
    </div>
  );
}
