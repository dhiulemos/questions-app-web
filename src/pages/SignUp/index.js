import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

import Logo from "../../components/Logo";
import Input from "../../components/Input";
import Button from "../../components/Button";

import * as C from "./styles";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignUp = () => {
    if (!email | !passwordConfirm | !password) {
      setError("Preencha todos os campos");
      return;
    } else if (password !== passwordConfirm) {
      setError("As senhas não são iguais");
      return;
    }

    const res = signup(email, password);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <C.Container>
      <Logo />
      <C.Content>
        <C.Label>Cadastrar</C.Label>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => [setPassword(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Confirme sua senha"
          value={passwordConfirm}
          onChange={(e) => [setPasswordConfirm(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Cadastrar" onClick={handleSignUp} />
        <C.LabelSignIn>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entrar</Link>
          </C.Strong>
        </C.LabelSignIn>
      </C.Content>
    </C.Container>
  );
};

export default Signup;
