import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./home/home";
import Releases from "./releases/releases";
import Tools from "./tools/tools";

function Routing() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/releases" component={Releases} />
      <Route exact path="/tools" component={Tools} />
    </Switch>
  );
}

export default Routing;