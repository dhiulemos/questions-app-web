import styled from "styled-components";
export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  width: 100%;
`;

export const Logo = styled.div`
  .App-logo {
    height: 10rem;
    pointer-events: none;
  }
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
