import React from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {Switch, Route, HashRouter} from "react-router-dom";
import Search from "./components/Search";
import About from "./components/About";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <HashRouter>
            <ScrollToTop>
                <Header/>
                <Switch>
                    <Route path={'/'} exact component={Main}/>
                    <Route path={'/search'} component={Search}/>
                    <Route path={'/about'} component={About}/>
                </Switch>
                <Footer/>
            </ScrollToTop>
        </HashRouter>
    );
}

export default App;
