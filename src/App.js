import React, {useState} from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {Switch, Route, HashRouter} from "react-router-dom";
import Search from "./components/Search";
import About from "./components/About";
import ScrollToTop from "./components/ScrollToTop";
import counterpart from "counterpart";
import ruLang from "./lang/ru";
import engLang from "./lang/en";
import esstLang from "./lang/esst";

counterpart.registerTranslations('ruLang', ruLang);
counterpart.registerTranslations('engLang', engLang);
counterpart.registerTranslations('esstLang', esstLang);
counterpart.setLocale('esstLang');

function App() {

    const [lang, setLang] = useState('esstLang');

    const mainChangeLang = (e) => {
        setLang(e.target.value);
        counterpart.setLocale(e.target.value);
    };

    return (
        <HashRouter>
            <ScrollToTop>
                <Header mainChangeLang={mainChangeLang}/>
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
