import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdDelete } from "react-icons/md";

import api from "../../services/api";

import Header from "../../components/Header";
import Button from "../../components/Button";
import Input from "../../components/Input";

import * as C from "./styles";
import { useEffect } from "react";
import { findAllByTestId } from "@testing-library/react";

const EditQuiz = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const user_id = localStorage.getItem("user");

  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  const [questions, setQuestions] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");

  const getQuiz = async () => {
    const response = await api.get(`/quiz/${id}`);

    const { name } = response.data.quiz;

    setName(name);
  };

  const getQuestions = async () => {
    const response = await api.get(`/question/all/${id}`);

    if (response.data.questions) {
      setQuestions(response.data.questions);
    }
  };

  useEffect(() => {
    getQuiz();
    getQuestions();
  }, []);

  const updateQuiz = async () => {
    if (!name) {
      setMessage("Título do quiz é obrigatório!");
      return;
    }

    const response = await api.patch(`/quiz/${id}`, {
      name,
      user_id,
    });

    if (response.data.error) {
      setMessage(response.data.error);
      return;
    } else {
      console.log("Quiz atualizado com sucesso", response);
    }

    navigate("/dashboard");
  };

  const handleQuestion = async () => {
    if (!question) {
      setMessage("Descrição da questão é obrigatória!");
      return;
    }

    const response = await api.post("/question", {
      description: question,
      quiz_id: id,
    });

    if (response.data.error) {
      setMessage(response.data.error);
      return;
    } else {
      console.log("Questão criada com sucesso", response);
    }

    getQuestions();
    togglePopup();
  };

  const handleDelete = async (id) => {
    const response = await api.delete(`/question/${id}`);

    if (response.data.error) {
      console.log(response.data.error);
    } else {
      console.log("Questão deletado com sucesso", response);
      getQuestions();
    }
  };

  const togglePopup = () => {
    setQuestion("");
    setShowPopup(!showPopup);
  };

  return (
    <C.Container>
      <Header />

      <C.Content>
        <C.WrapperTitle>
          <C.Title>Título do Quiz</C.Title>
          <Input
            type="text"
            placeholder="Inserir título..."
            value={name}
            onChange={(e) => [setName(e.target.value), setMessage("")]}
          />
        </C.WrapperTitle>

        <C.WrapperQuestions>
          <C.WrapperQuestionAdd>
            <C.Title>Questões do Quiz</C.Title>
            <C.NewQuestion onClick={togglePopup}>Nova Questão +</C.NewQuestion>
          </C.WrapperQuestionAdd>

          <C.QuestionsList>
            {questions.length > 0 ? (
              questions.map((question) => {
                return (
                  <C.QuestionItem key={question._id}>
                    <C.Name>{question.description}</C.Name>

                    <C.Button onClick={() => handleDelete(question._id)}>
                      <MdDelete fontSize="2.2rem" />
                    </C.Button>
                  </C.QuestionItem>
                );
              })
            ) : (
              <C.QuestionItem>Não encontramos nenhuma questão</C.QuestionItem>
            )}
          </C.QuestionsList>

          {showPopup ? (
            <C.PopupContainer>
              <C.PopupContent>
                <C.Label>Descrição da Questão</C.Label>

                <C.TextArea
                  placeholder="Inserir descrição da questão..."
                  value={question}
                  onChange={(e) => [
                    setQuestion(e.target.value),
                    setMessage(""),
                  ]}
                />

                <C.WrapperButtons>
                  <Button Text="Salvar" onClick={handleQuestion} />
                  <Button Text="Fechar" onClick={togglePopup} />
                </C.WrapperButtons>

                {message}
              </C.PopupContent>
            </C.PopupContainer>
          ) : (
            false
          )}
        </C.WrapperQuestions>

        <C.WrapperButtons>
          <Button Text="Salvar" onClick={updateQuiz}>
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

export default EditQuiz;
