import React from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Search from "./components/Search";
import About from "./components/About";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path={'/'} exact component={Main}/>
                <Route path={'/search'} component={Search}/>
                <Route path={'/about'} component={About}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
