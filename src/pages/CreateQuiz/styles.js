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
  font-size: 2.8rem;
  font-weight: 700;
  padding: 3rem;
  max-width: 80rem;
  width: 100%;
`;

export const WrapperTitle = styled.ul`
  margin-bottom: 4rem;
`;

export const TitleQuiz = styled.h2`
  font-size: 2.6rem;
  margin-bottom: 2rem;
  text-align: center;
`;

export const TitleQuestions = styled.h2`
  font-size: 2.6rem;
  text-align: center;
`;

export const AddQuestion = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
  width: 100%;
`;

export const WrapperButtons = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: flex-end;
`;

export const NewQuestion = styled.button`
  background-color: #345830ff;
  border: 1px solid #345830ff;
  border-radius: 0.5rem;
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  height: 4rem;
  min-width: 16rem;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4a7856ff;
    border: 1px solid #4a7856ff;
  }
`;

export const Answer = styled.div`
  display: flex;
  align-items: center;
  height: 6rem;
  padding: 1rem 1.5rem;
  gap: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);
`;

export const AddItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
  width: 100%;
`;

export const Button = styled.button``;

export const InputText = styled.input`
  flex: 1;
  outline: 0;
`;

export const InputRadio = styled.input``;
