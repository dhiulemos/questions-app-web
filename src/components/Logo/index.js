import React from "react";
import * as C from "./styles";

import logo from "../../assets/images/logo.svg";

const Logo = () => {
  return (
    <C.Logo>
      <img src={logo} className="App-logo" alt="logo" />
    </C.Logo>
  );
};

export default Logo;
