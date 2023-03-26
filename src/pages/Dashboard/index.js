import React from "react";
import { useNavigate } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";

import useAuth from "../../hooks/useAuth";

import Logo from "../../components/Logo";

import * as C from "./styles";

const Dashboard = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const toggleSettings = () => {
    document.querySelector("#settings-list").classList.toggle("-open");
  };

  return (
    <C.Container>
      <C.Nav>
        <C.Title>Dashboard</C.Title>

        <Logo />

        <C.Settings>
          <C.ButtonSettings id="settings" onClick={toggleSettings}>
            <IoSettingsOutline color="#F9F6F0" fontSize="2.8rem" />
          </C.ButtonSettings>
          <C.List id="settings-list">
            <C.ListItem>
              <C.ButtonList>Meu Perfil</C.ButtonList>
            </C.ListItem>
            <C.ListItem>
              <C.ButtonList onClick={() => [signout(), navigate("/")]}>
                Sair
              </C.ButtonList>
            </C.ListItem>
          </C.List>
        </C.Settings>
      </C.Nav>

      <C.Content>Componente em construção</C.Content>
    </C.Container>
  );
};

export default Dashboard;
