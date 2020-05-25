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
                    <li>
                        <button value='ruLang' onClick={(e) => {
                            onLangChange(e)
                        }}><img src={ru} alt="ru"/></button>
                    </li>
                    <li>
                        <button value='engLang' onClick={(e) => {
                            onLangChange(e)
                        }}><img src={eng} alt="eng"/></button>
                    </li>
                    <li>
                        <button value='esstLang' onClick={(e) => {
                            onLangChange(e)
                        }}><img src={est} alt="est"/></button>
                    </li>
                </ul>
                <select name="" id="" className='lang_mob' onChange={(e) => {
                    onLangChange(e)
                }}>
                    <option value="ruLang">Рус</option>
                    <option value="engLang" >Eng</option>
                    <option selected value="esstLang">Est</option>
                </select>
            </div>
        </header>
    )
};

export default Header;