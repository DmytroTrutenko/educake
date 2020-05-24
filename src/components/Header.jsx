import React, {useState} from "react";
import logo from '../assets/educakeLogo.png';
import ru from '../assets/ru.png';
import eng from '../assets/eng.png';
import est from '../assets/est.png';
import {NavLink} from "react-router-dom";
import counterpart from 'counterpart';




const Header = ({mainChangeLang}) => {

    const [active, setActive] = useState(false);
    const main = counterpart.translate('menu.main');
    const search = counterpart.translate('menu.search');
    const about = counterpart.translate('menu.about');
    
    const onLangChange = (e) => {
        mainChangeLang(e);
    };

    return (
        <header className="header">
            <div className="container">
                <div onClick={
                    () => {
                        setActive(active ? !active : true)
                    }
                } className={active ? 'hamburger active' : 'hamburger'}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <NavLink to="/" className="logo"><img src={logo} alt="logo"/></NavLink>
                <ul className={active ? 'main_nav active' : 'main_nav'}>
                    <li><NavLink to="/">{main}</NavLink></li>
                    <li><NavLink to="/search">{search}</NavLink></li>
                    <li><NavLink to="/about">{about}</NavLink></li>
                </ul>
                <ul className="lang">
                    <button value='ruLang' onClick={(e)=>{onLangChange(e)}}>ru</button>
                    <button value='engLang' onClick={(e)=>{onLangChange(e)}}>eng</button>
                    <button value='esstLang' onClick={(e)=>{onLangChange(e)}}>estti</button>
                </ul>
            </div>
        </header>
    )
};

export default Header;