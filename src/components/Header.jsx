import React from "react";
import logo from '../assets/educakeLogo2.png';
import ru from '../assets/ru.png';
import eng from '../assets/eng.png';
import est from '../assets/est.png';
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <NavLink to="/" className="logo"><img src={logo} alt="logo"/></NavLink>
                <ul className="main_nav">
                    <li><NavLink to="/">Главная</NavLink></li>
                    <li><NavLink to="/search">Поиск</NavLink></li>
                    <li><NavLink to="/about">О нас</NavLink></li>
                </ul>
                <ul className="lang">
                    <li><a href="#"><img src={ru} alt="ru"/></a></li>
                    <li><a href="#"><img src={eng} alt="eng"/></a></li>
                    <li><a href="#"><img src={est} alt="est"/></a></li>
                </ul>
            </div>

        </header>
    )
};

export default Header;