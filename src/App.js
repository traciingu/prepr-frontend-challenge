import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Home";
import ChallengePage from './Challenge-Page';
import "./styles/App.css";

function App() {
  return (
    <div>
      <BrowserRouter basename={"/prepr-frontend-challenge"}>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/challenge-page"} component={ChallengePage}/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
