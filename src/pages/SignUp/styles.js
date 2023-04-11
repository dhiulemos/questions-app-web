import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4rem;
  background-color: #171515;
  padding: 5%;
  min-height: 100vh;
  width: 100%;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  background-color: #ffffff;
  border-radius: 1rem;
  max-width: 42rem;
  padding: 3rem;
  text-align: center;
  width: 100%;
`;

export const Logo = styled.div`
  .App-logo {
    height: 10rem;
    pointer-events: none;
  }
`;

export const Label = styled.label`
  color: #345830ff;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const LabelSignIn = styled.label`
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 1.4rem;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;
