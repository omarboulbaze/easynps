import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//importing components
import App from "./pages/App";
import Scan from "./pages/Scan";
import Thanks from "./pages/Thanks";
import Error from "./pages/Error";

function Root() {
return(

<>

<Router>

    <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/scan" component={Scan}/>
        <Route exact path="/thanks" component={Thanks}/>
        <Route path="/" component={Error}/>
    </Switch>

</Router>

</>

)
}

export default Root;