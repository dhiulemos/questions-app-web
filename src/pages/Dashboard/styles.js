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

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  width: 100%;
`;

export const Title = styled.h1`
  color: #f9f6f0;
  font-size: 2.6rem;
  font-weight: 700;
  flex: 1;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const Settings = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  position: relative;
`;

export const ButtonSettings = styled.button``;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background-color: #ffffff;
  margin-top: 2rem;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  top: calc(100%);
  right: 0;
  visibility: hidden;
  width: 20rem;

  &.-open {
    opacity: 1;
    visibility: visible;
  }
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.05);
  }
`;

export const ButtonList = styled.button`
  padding: 1.5rem 2rem;
  text-align: center;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    background-color: #345830ff;
    color: #ffffff;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 1rem;
  padding: 3rem;
  text-align: center;
  min-height: 60vh;
  width: 100%;

  font-size: 2.8rem;
  font-weight: 700;
  text-transform: uppercase;
`;
