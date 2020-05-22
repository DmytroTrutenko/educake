import React, {useState} from "react";
import mainor from '../assets/images.png';
import ttu from '../assets/ttu.jpg';
import tartuuli from '../assets/tartuulikool.png';
import it from '../assets/IT_spec.jpg';
import kval from '../assets/kval_rab.jpg';
import doctors from '../assets/doctors.jpg';
import {NavLink} from "react-router-dom";

const Main = () => {

    const [img_tabs, setImg_tabs] = useState(it);
    const [active, setActive] = useState('0');

    const tabToggle = (txt, e) => {
        setActive(e.target.id);
        if (txt === 'ИТ-специалисты') {
            return setImg_tabs(it);
        } else if (txt === 'Квалифицированные рабочие') {
            return setImg_tabs(kval);
        } else if (txt === 'Медицинские работники') {
            return setImg_tabs(doctors);
        }
    };

    return (
        <main className="main">
            {/*call_action*/}
            <section className="call_action">
                <div className="container">
                    <div className="call_action_text">
                        <h3>Желаешь найти университет в Эстонии?</h3>
                        <p>Найди свой будущий университет в Эстонии через поиск</p>
                    </div>
                    <NavLink to="/search" className="btn btn-dark">Поиск университета</NavLink>
                </div>
            </section>
            {/*pop_univer*/}
            <section className="pop_univer">
                <div className="container">
                    <h4>Cамые популярные университеты среди абитуриентов Эстонии</h4>
                    <div className="top_uni">
                        <a href="https://www.eek.ee/" className="item1"><img src={mainor} alt=""/></a>
                        <a href="https://www.ttu.ee/" className="item2"><img src={ttu} alt=""/></a>
                        <a href="https://www.ut.ee/et" className="item3"><img src={tartuuli} alt=""/></a>
                    </div>
                </div>
            </section>
            {/*pop_spec*/}
            <section className="pop_spec">
                <div className="container">
                    <h4>Чаще всего на нашем сайте искали эти учебные специальности</h4>

                    <div className="pop_spec_tabs">
                        <ul className="nav_tabs">
                            <li><a onClick={(e) => {
                                tabToggle('ИТ-специалисты', e)
                            }} id='0' className={active === "0" ? "active" : ""}>ИТ-специалисты</a></li>
                            <li><a onClick={(e) => {
                                tabToggle('Квалифицированные рабочие', e)
                            }} id='1' className={active === "1" ? "active" : ""}>Квалифицированные рабочие</a></li>
                            <li><a onClick={(e) => {
                                tabToggle('Медицинские работники', e)
                            }} id='2' className={active === "2" ? "active" : ""}>Медицинские работники</a></li>
                        </ul>
                        <div className="tab_content">
                            <div className="tab_item" id="tab1"><img src={img_tabs} alt="img"/></div>
                        </div>
                    </div>

                </div>

            </section>
        </main>
    )
};

export default Main;