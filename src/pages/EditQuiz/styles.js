import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8rem;
  background-color: #171515;
  padding: 0 5% 5%;
  min-height: 100vh;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 1rem;
  padding: 3rem;
  max-width: 80rem;
  width: 100%;
`;

export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
`;

export const WrapperButtons = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: flex-end;
`;

export const WrapperQuestions = styled.div`
  margin-bottom: 4rem;
`;

export const QuestionsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;-
`;

export const QuestionItem = styled.li`
  display: flex;
  align-items: center;
  height: 6rem;
  padding: 1rem 1.5rem;
  gap: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.span`
  display: block;
  flex: 1;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
`;

export const TextArea = styled.textarea`
  border-radius: 0.5rem;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);
  height: 12rem;
  padding: 2rem;
  width: 100%;
  margin-bottom: 2rem;
`;

export const Name = styled.span`
  display: block;
  flex: 1;
  font-weight: 700;
`;

export const WrapperQuestionAdd = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const PopupContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(1px);
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupContent = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 80rem;
`;

export const Button = styled.button``;

export const NewQuestion = styled.button`
  border-bottom: 1px solid;
  font-weight: 1.6rem;
  font-weight: 600;
  padding-bottom: 0.2rem;
  letter-spacing: 0.08em;
`;
