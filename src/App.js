import React from "react";
import { useRoutes } from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "./context";

function App() {
  const routes = useRoutes();

  return (
    <ContextProvider>
      <Router>
        <div>{routes}</div>
      </Router>
    </ContextProvider>
  );
}

export default App;
