import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";

import logo from "../../assets/images/logo.svg";

import Input from "../../components/Input";
import Button from "../../components/Button";

import * as C from "./styles";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email | !password) {
      setError("Preencha todos os campos");
      return;
    }

    const response = await api.post("/signin", {
      email,
      password,
    });

    if (response.data.error) {
      setError(response.data.error);
    } else {
      const { _id } = response.data.user;

      localStorage.setItem("user", _id);
      navigate("/dashboard");
    }
  };

  return (
    <C.Container>
      <C.Logo>
        <img src={logo} className="App-logo" alt="logo" />
      </C.Logo>

      <C.Content>
        <C.Label>Entrar</C.Label>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua password"
          value={password}
          onChange={(e) => [setPassword(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Entrar" onClick={handleLogin} />
        <C.LabelSignUp>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignUp>
      </C.Content>
    </C.Container>
  );
};

export default Signin;
