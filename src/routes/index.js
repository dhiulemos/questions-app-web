import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import CreateQuiz from "../pages/CreateQuiz";
import EditQuiz from "../pages/EditQuiz";

const RoutesApp = () => {
  const Private = ({ Item }) => {
    const user = localStorage.getItem("user");

    return user ? <Item /> : <SignIn />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/dashboard" element={<Private Item={Dashboard} />} />
        <Route path="*" element={<SignIn />} />
        <Route path="/" exact element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/quiz" element={<CreateQuiz />} />
        <Route path="/quiz/:id" element={<EditQuiz />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
