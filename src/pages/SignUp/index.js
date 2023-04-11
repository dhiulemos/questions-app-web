import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";

import logo from "../../assets/images/logo.svg";

import Input from "../../components/Input";
import Button from "../../components/Button";

import * as C from "./styles";

const Signup = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (!name | !email | !passwordConfirm | !password) {
      setError("Preencha todos os campos");
      return;
    } else if (password !== passwordConfirm) {
      setError("As senhas não são iguais");
      return;
    }

    const response = await api.post("/signup", {
      name,
      email,
      password,
      passwordConfirm,
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
        <C.Label>Registrar-se</C.Label>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => [setName(e.target.value), setError("")]}
        />
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
