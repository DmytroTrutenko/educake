import React from "react";
import PriceSlider from "./PriceSlider";
import DurationSlider from "./DurationSlider";
import ttu from '../assets/ttu.jpg';
import counterpart from 'counterpart';

const Search = () => {

    //функция смены языка
    const lt = (str) => {
        return counterpart.translate(str)
    };
    const option1 = lt('search.select.option1'),
        option2 = lt('search.select.option2'),
        option3 = lt('search.select.option3'),
        option4 = lt('search.select.option4'),
        option5 = lt('search.select.option5'),
        option6 = lt('search.select.option6'),
        option7 = lt('search.select.option7'),
        option8 = lt('search.select.option8'),
        option9 = lt('search.select.option9'),
        label1 = lt('search.label1'),
        label2 = lt('search.label2'),
        label3 = lt('search.label3');


    return (
        <main className="main">
            <section className='search-form_section'>
                <div className="container">
                    <form action="#" className="searh-form">
                        <div className="block-left">
                            <div className="input_group">
                                <p>{lt('search.p2')}</p><input type="text"/>
                            </div>
                            <div className="input_group">
                                <p>{lt('search.p3')}</p><input type="text"/>
                            </div>
                            <div className="input_group">
                                <p>{lt('search.p4')}</p>
                                <select name="" id="">
                                    <option value=''></option>
                                    <option value={option1}>{option1}</option>
                                    <option value={option2}>{option2}</option>
                                    <option value={option3}>{option3}</option>
                                </select>
                            </div>
                            <div className="input_group">
                                <p>{lt('search.p5')}</p>
                                <select name="" id="">
                                    <option value=''></option>
                                    <option value={option4}>{option4}</option>
                                    <option value={option5}>{option5}</option>
                                    <option value={option6}>{option6}</option>
                                </select>
                            </div>
                            <div className="input_group">
                                <p>{lt('search.p6')}</p>
                                <select name="" id="">
                                    <option value=''></option>
                                    <option value={option7}>{option7}</option>
                                    <option value={option8}>{option8}</option>
                                    <option value={option9}>{option9}</option>
                                </select>
                            </div>
                            <div className="input_group">
                                <p>{lt('search.p7')}</p>
                                <div className="cust-checkbox">
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="ru"/>
                                    <label htmlFor="vehicle1">{label1}</label>
                                    <input type="checkbox" id="vehicle2" name="vehicle2" value="eng"/>
                                    <label htmlFor="vehicle2">{label2}</label>
                                    <input type="checkbox" id="vehicle3" name="vehicle3" value="esst"/>
                                    <label htmlFor="vehicle3">{label3}</label>
                                </div>
                            </div>

                        </div>
                        <div className="block-right">
                            <p>{lt('search.p8')}</p>
                            <PriceSlider/>
                            <p>{lt('search.p9')}</p>
                            <DurationSlider/>
                            <div className="buttons">
                                <a href="#" className="btn btn-dark">{lt('search.btn2')}</a>
                                <a href="#" className="btn btn-dark btn-clear">{lt('search.btn3')}</a>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <section className="search-result">
                <div className="container">
                    <h4>{lt('search.h4_3')}</h4>
                    <div className="card-items">
                        <div className="item">
                            <div className="name-img">
                                <h3>{lt('search.h3_2')}</h3>
                                <img src={ttu} alt="img"/>
                            </div>
                            <div className="desc">
                                <p>{lt('search.p10')}</p>
                                <p>{lt('search.p11')}</p>
                                <p>{lt('search.p12')}</p>
                                <p>{lt('search.p13')}</p>
                            </div>
                            <div className="price-btn">
                                <p>{lt('search.p14')}</p>
                                <span>{lt('search.span')}</span>
                                <a href="#" className="btn btn-dark">{lt('search.btn4')}</a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="name-img">
                                <h3>{lt('search.h3_2')}</h3>
                                <img src={ttu} alt="img"/>
                            </div>
                            <div className="desc">
                                <p>{lt('search.p10')}</p>
                                <p>{lt('search.p11')}</p>
                                <p>{lt('search.p12')}</p>
                                <p>{lt('search.p13')}</p>
                            </div>
                            <div className="price-btn">
                                <p>{lt('search.p14')}</p>
                                <span>{lt('search.span')}</span>
                                <a href="#" className="btn btn-dark">{lt('search.btn4')}</a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="name-img">
                                <h3>{lt('search.h3_2')}</h3>
                                <img src={ttu} alt="img"/>
                            </div>
                            <div className="desc">
                                <p>{lt('search.p10')}</p>
                                <p>{lt('search.p11')}</p>
                                <p>{lt('search.p12')}</p>
                                <p>{lt('search.p13')}</p>
                            </div>
                            <div className="price-btn">
                                <p>{lt('search.p14')}</p>
                                <span>{lt('search.span')}</span>
                                <a href="#" className="btn btn-dark">{lt('search.btn4')}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
};

export default Search;