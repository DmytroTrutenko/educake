import React, {useState} from "react";
import logo from '../assets/educakeLogo.png';
import ru from '../assets/ru.png';
import eng from '../assets/eng.png';
import est from '../assets/est.png';
import {NavLink} from "react-router-dom";



const Header = () => {

    const [active, setActive] = useState(false);


    return (
        <header className="header">
            <div className="container">
                <div onClick={
                    () => { setActive(active ? !active : true) }
                } className={active ? 'hamburger active': 'hamburger'}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <NavLink to="/" className="logo"><img src={logo} alt="logo"/></NavLink>
                <ul className={active ? 'main_nav active': 'main_nav'}>
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