import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { GamePage } from "./pages/GamePage";
import { RecordsPage } from "./pages/RecordsPage";
import { WelcomePage } from "./pages/WelcomePage";

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={WelcomePage} />
      <Route path="/game" exact component={GamePage} />
      <Route path="/records" exact component={RecordsPage} />
      <Redirect to="/" />
    </Switch>
  );
};
