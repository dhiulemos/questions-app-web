import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";

import api from "../../services/api";

import Header from "../../components/Header";
import Button from "../../components/Button";

import * as C from "./styles";

const Dashboard = () => {
  const navigate = useNavigate();
  const user_id = localStorage.getItem("user");

  const [quizzes, setQuizzes] = useState({});

  useEffect(() => {
    handleShow();
  }, []);

  const handleShow = async () => {
    const response = await api.get(`/quiz/all/${user_id}`);

    if (response.data.quizzes) {
      setQuizzes(response.data.quizzes);
    }
  };

  const handleCreate = () => {
    navigate("/quiz");
  };

  const handleEdit = (id) => {
    navigate(`/quiz/${id}`);
  };

  const handleDelete = async (id) => {
    const response = await api.delete(`/quiz/${id}`);

    if (response.data.error) {
      console.log(response.data.error);
    } else {
      console.log("Quiz deletado com sucesso", response);
      handleShow();
    }
  };

  return (
    <C.Container>
      <Header />

      <C.Content>
        <C.AddQuiz>
          <C.Title>Meus Quizzes</C.Title>
          <Button Text="Novo Quiz +" onClick={handleCreate}>
            Novo Quiz +
          </Button>
        </C.AddQuiz>

        <C.QuizList>
          {quizzes.length > 0 ? (
            quizzes.map((quiz) => {
              return (
                <C.QuizItem key={quiz._id}>
                  <C.Name>{quiz.name}</C.Name>
                  <C.Button onClick={() => handleEdit(quiz._id)}>
                    <MdEdit fontSize="2.2rem" />
                  </C.Button>
                  <C.Button onClick={() => handleDelete(quiz._id)}>
                    <MdDelete fontSize="2.2rem" />
                  </C.Button>
                </C.QuizItem>
              );
            })
          ) : (
            <C.QuizItem>Não encontramos nenhum quiz</C.QuizItem>
          )}
        </C.QuizList>
      </C.Content>
    </C.Container>
  );
};

export default Dashboard;
