import "../styles/login.css";
// Images
import codeOneLogo from "../images/codeone-logo-sin-fondo.webp";

import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate("/dashboard");
  };

  return (
    <div className="container-login">
      <a href="https://www.codeone.cl/" target="_blank">
        <img src={codeOneLogo} alt="CodeOne's logo image" />
      </a>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          id="username"
          name="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Contraseña"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Iniciar sesión</button>
      </form>
      <a
        className="dont-have-an-account"
        href="https://www.codeone.cl/contacto/#form-contacto"
        target="_blank"
      >
        ¿No tiene una contraseña? Contactanos y pide una
      </a>
    </div>
  );
};

export default Login;
