import React from "react";
import team from '../assets/team.jpg';
import site from '../assets/site.png';
import coin from '../assets/coin.png';
import persons from '../assets/persons.png';


const About = () => {


    return (
        <main className='main'>
            <section className='about_section'>
                <div className="container">
                    <h4>Наша команда создала площадку для поиска университета, потенциальным студентам в Эстонии.</h4>
                    <div className="about">
                        <div className="img">
                            <img src={team} alt="img"/>
                        </div>
                        <div className="info">
                            <h3>Для создания сайта были использованы:</h3>
                            <ul className='with_icon'>
                                <li><img src={site} alt="img"/>Автоматизация сайта.</li>
                                <li><img src={coin} alt="img"/>Разработка бюджета сайта.</li>
                                <li><img src={persons} alt="img"/>Разработка персонажей и пользовательские истории, а так же сценарий.</li>
                            </ul>
                        </div>
                    </div>
                    <p>Данный поисковик был создан для практической работы в университете.</p>
                </div>
            </section>
        </main>
    )
};

export default About;