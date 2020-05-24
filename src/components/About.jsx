import React from "react";
import team from '../assets/team.jpg';
import site from '../assets/site.png';
import coin from '../assets/coin.png';
import persons from '../assets/persons.png';
import counterpart from "counterpart";


const About = () => {

    //функция смены языка
    const lt = (str) => {
        return counterpart.translate(str)
    };

    return (
        <main className='main'>
            <section className='about_section'>
                <div className="container">
                    <h4>{lt('about.h4_4')}</h4>
                    <div className="about">
                        <div className="img">
                            <img src={team} alt="img"/>
                        </div>
                        <div className="info">
                            <h3>{lt('about.h3_3')}</h3>
                            <ul className='with_icon'>
                                <li><img src={site} alt="img"/>{lt('about.li_4')}</li>
                                <li><img src={coin} alt="img"/>{lt('about.li_5')}</li>
                                <li><img src={persons} alt="img"/>{lt('about.li_6')}</li>
                            </ul>
                        </div>
                    </div>
                    <p>{lt('search.p15')}</p>
                </div>
            </section>
        </main>
    )
};

export default About;