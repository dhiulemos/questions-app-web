import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #171515;
  padding: 0 5% 5%;
  min-height: 100vh;
  width: 100%;
`;

export const Content = styled.div`
  background-color: #ffffff;
  border-radius: 1rem;
  padding: 4rem;
  max-width: 70%;
  margin-top: 5%;
  width: 100%;
`;

export const AddQuiz = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 3rem;
`;

export const QuizList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const QuizItem = styled.li`
  display: flex;
  align-items: center;
  height: 6rem;
  padding: 1rem 1.5rem;
  gap: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);
`;

export const Name = styled.span`
  display: block;
  flex: 1;
  font-weight: 700;
`;

export const Button = styled.button``;
