import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//importing components
import App from "./pages/App";
import Scan from "./pages/Scan";

function Root() {
return(

<>

<Router>

    <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/scan" component={Scan}/>
        {/* If path doesn't exist */}
        {/* <Route path="/" component={Error}/> */}
    </Switch>

</Router>

</>

)
}

export default Root;