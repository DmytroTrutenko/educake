import React from "react";
import logo from "../assets/educakeLogo2.png";
import {NavLink} from "react-router-dom";
import fb from '../assets/fb.png';
import git from '../assets/github.png';
import inst from '../assets/instagram.png';
import twitt from '../assets/twitter.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <NavLink to="/" className="logo"><img src={logo} alt="logo"/></NavLink>
                <ul className="footer_nav">
                    <li><NavLink to="/">Главная</NavLink></li>
                    <li><NavLink to="/search">Поиск</NavLink></li>
                    <li><NavLink to="/about">О нас</NavLink></li>
                </ul>
                <ul className="social_nav">
                    <li><a href="https://www.facebook.com/groups/931815190299479"><img src={fb}/></a></li>
                    <li><a href="https://github.com/DmytroTrutenko/educake"><img src={git}/></a></li>
                    <li><a href="https://www.instagram.com/"><img src={inst}/></a></li>
                    <li><a href="https://twitter.com/explore"><img src={twitt}/></a></li>
                </ul>
                <div className="end">
                    <p>Mainor</p>
                    <p>2020</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;