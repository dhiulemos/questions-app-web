import React from "react";
import { useNavigate } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";

import api from "../../services/api";

import * as C from "./styles";

import logo from "../../assets/images/logo.svg";

const Header = () => {
  const navigate = useNavigate();

  const toggleSettings = () => {
    document.querySelector("#settings-list").classList.toggle("-open");
  };

  const signOut = () => {
    const user = localStorage.getItem("user");

    if (user) {
      localStorage.clear();
    }

    navigate("/signin");
  };

  return (
    <C.Nav>
      <C.Logo>
        <img src={logo} className="App-logo" alt="logo" />
      </C.Logo>
      <C.Settings>
        <C.ButtonSettings id="settings" onClick={toggleSettings}>
          <IoSettingsOutline color="#F9F6F0" fontSize="2.8rem" />
        </C.ButtonSettings>
        <C.List id="settings-list">
          <C.ListItem>
            <C.ButtonList>Meu Perfil</C.ButtonList>
          </C.ListItem>
          <C.ListItem>
            <C.ButtonList onClick={() => [signOut(), navigate("/")]}>
              Sair
            </C.ButtonList>
          </C.ListItem>
        </C.List>
      </C.Settings>
    </C.Nav>
  );
};

export default Header;
