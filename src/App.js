import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Home";
import PostDetails from "./PostDetails";
import "./styles/App.css";

function App() {
  return (
    <div>
      <BrowserRouter basename={"/prepr-frontend-challenge"}>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/post-details/:postType/:id"} component={PostDetails}/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
