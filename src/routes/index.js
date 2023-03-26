import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import useAuth from "../hooks/useAuth";

import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <SignIn />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route
            exact
            path="/dashboard"
            element={<Private Item={Dashboard} />}
          />
          <Route path="/" element={<SignIn />} />
          <Route exact path="/signUp" element={<SignUp />} />
          <Route path="*" element={<SignIn />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
