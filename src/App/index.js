import React, { useContext, useState } from "react";
import { Switch,Route, BrowserRouter as Router, Redirect} from "react-router-dom"
import './App.css';

    import { Header } from "./Header";
    import { Login} from "./Login";




export const App = ()=>{

    return (
        <Router>
           
                <Switch>
                    <Route exact path="/" render={()=><Redirect to="/login"/>}/>
                    <Route exact path="/login" component={Login}/>
                     <Route exact path="/Header" component={Header} />
                </Switch>

       
        </Router>
    )
}