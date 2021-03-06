import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "@pages/Home";
import Who from "@pages/Who";
import NotFound from "@pages/NotFound";

const App = () => {
  return (
    <BrowserRouter basename="/deploy-test">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/who" component={Who} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

/*<div>
<Home />
</div>*/
