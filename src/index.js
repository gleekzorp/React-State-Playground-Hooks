import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Align from "./components/align";
import ChangeColor from "./components/change-color";
import Clock from "./components/clock";
import Counter from "./components/counter";
import FontSizer from "./components/font-sizer";
import Home from "./components/home";
import ShowHide from "./components/show-hide";
import Toggle from "./components/toggle";
import NavigationContainer from "./components/navigation-container";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavigationContainer />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/counter" component={Counter} />
            <Route path="/toggle" component={Toggle} />
            <Route path="/font-sizer" component={FontSizer} />
            <Route path="/align" component={Align} />
            <Route path="/show-hide" component={ShowHide} />
            <Route path="/clock" component={Clock} />
            <Route path="/change-color" component={ChangeColor} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
