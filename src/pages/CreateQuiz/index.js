import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";

import api from "../../services/api";

import Header from "../../components/Header";
import Button from "../../components/Button";
import Input from "../../components/Input";

import * as C from "./styles";

const CreateQuiz = () => {
  const navigate = useNavigate();

  const user_id = localStorage.getItem("user");

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleCreate = async () => {
    if (!name) {
      setMessage("Título do quiz é obrigatório!");
      return;
    }

    const response = await api.post("/quiz", {
      name,
      user_id,
    });

    if (response.data.error) {
      setMessage(response.data.error);
      return;
    } else {
      console.log("Quiz criado com sucesso", response);
    }

    navigate(`/quiz/${response.data.quiz._id}`);
  };

  return (
    <C.Container>
      <Header />

      <C.Content>
        <C.WrapperTitle>
          <C.TitleQuiz>Quiz</C.TitleQuiz>
          <Input
            type="text"
            placeholder="Inserir título..."
            value={name}
            onChange={(e) => [setName(e.target.value), setMessage("")]}
          />
        </C.WrapperTitle>

        <C.WrapperButtons>
          <Button Text="Criar Quiz" onClick={handleCreate}>
            Salvar
          </Button>
          <Button Text="Cancelar" onClick={() => navigate("/dashboard")}>
            Cancelar
          </Button>
        </C.WrapperButtons>

        <span>{message}</span>
      </C.Content>
    </C.Container>
  );
};

export default CreateQuiz;
