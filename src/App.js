import React from "react";
import RoutesApp from "./routes";
import { AuthProvider } from "./data/auth";

import GlobalStyle from "./styles/global";

function App() {
  document.title = "Questions App";

  return (
    <main className="App">
      <AuthProvider>
        <GlobalStyle />
        <RoutesApp />
      </AuthProvider>
    </main>
  );
}
export default App;
