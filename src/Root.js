import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//importing components
import App from "./pages/App";
import Scan from "./pages/Scan";
import Thanks from "./pages/Thanks";
import Error from "./pages/Error";
import Home from "./pages/Home/Home";
import Reviews from "./pages/Reviews";

function Root() {
return(

<>

<Router>

    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/bestbuy" component={App}/>
        <Route exact path="/scan" component={Scan}/>
        <Route exact path="/thanks" component={Thanks}/>
        <Route exact path="/reviews" component={Reviews}/>
        <Route path="/" component={Error}/>
    </Switch>

</Router>

</>

)
}

export default Root;