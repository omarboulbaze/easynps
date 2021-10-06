import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//importing components
import App from "./App";
import Scan from "./Scan";

function Root() {
return(

<>

<Router>

    <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/scan" component={Scan}/>
    </Switch>

</Router>

</>

)
}

export default Root;