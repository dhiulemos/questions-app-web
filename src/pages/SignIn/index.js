import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

import Logo from "../../components/Logo";
import Input from "../../components/Input";
import Button from "../../components/Button";

import * as C from "./styles";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !password) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, password);

    if (res) {
      setError(res);
      return;
    }

    navigate("/dashboard");
  };

  return (
    <C.Container>
      <Logo />
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
            <Link to="/signup">&nbsp;Cadastre-se</Link>
          </C.Strong>
        </C.LabelSignUp>
      </C.Content>
    </C.Container>
  );
};

export default Signin;
