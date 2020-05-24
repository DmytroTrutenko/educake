import React, {useState} from "react";
import mainor from '../assets/images.png';
import ttu from '../assets/ttu.jpg';
import tartuuli from '../assets/tartuulikool.png';
import it from '../assets/IT_spec.jpg';
import kval from '../assets/kval_rab.jpg';
import doctors from '../assets/doctors.jpg';
import {NavLink} from "react-router-dom";
import counterpart from 'counterpart';


const Main = () => {

    const [img_tabs, setImg_tabs] = useState(it);
    const [active, setActive] = useState('0');

    const tabToggle = (txt, e) => {
        setActive(e.target.id);
        if (txt === ite) {
            return setImg_tabs(it);
        } else if (txt === eco) {
            return setImg_tabs(kval);
        } else if (txt === doc) {
            return setImg_tabs(doctors);
        }
    };

    //функция смены языка
    const lt = (str) => {
        return counterpart.translate(str)
    };
    const ite = lt('main.pop_spec.li_1');
    const eco = lt('main.pop_spec.li_2');
    const doc = lt('main.pop_spec.li_3');

    return (
        <main className="main">
            {/*call_action*/}
            <section className="call_action">
                <div className="container">
                    <div className="call_action_text">
                        <h3>{lt('main.call_action.h3_1')}</h3>
                        <p>{lt('main.call_action.p1')}</p>
                    </div>
                    <NavLink to="/search" className="btn btn-dark">{lt('main.call_action.btn1')}</NavLink>
                </div>
            </section>
            {/*pop_univer*/}
            <section className="pop_univer">
                <div className="container">
                    <h4>{lt('main.pop_univer.h4_1')}</h4>
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
                    <h4>{lt('main.pop_spec.h4_2')}</h4>

                    <div className="pop_spec_tabs">
                        <ul className="nav_tabs">
                            <li><a onClick={(e) => {
                                tabToggle(ite, e)
                            }} id='0' className={active === "0" ? "active" : ""}>{ite}</a></li>
                            <li><a onClick={(e) => {
                                tabToggle(eco, e)
                            }} id='1' className={active === "1" ? "active" : ""}>{eco}</a></li>
                            <li><a onClick={(e) => {
                                tabToggle(doc, e)
                            }} id='2' className={active === "2" ? "active" : ""}>{doc}</a></li>
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