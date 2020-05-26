import React, {useState} from "react";
import PriceSlider from "./PriceSlider";
import DurationSlider from "./DurationSlider";
import counterpart from 'counterpart';
import Card from "./Card";
import {univerAPI} from "../logic/api";

const Search = () => {
    const [disable, setDisable] = useState(true);
    const [hide, setHide] = useState(true);


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


    const addTTU = async () => {
        let response = await univerAPI.getTTU();
        setHide(false);
    };

    return (
        <main className="main">
            <section className='search-form_section'>
                <div className="container">
                    <form onChange={() => {
                        setDisable(false)
                    }} className='searh-form'>
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
                            <PriceSlider value/>
                            <p>{lt('search.p9')}</p>
                            <DurationSlider value=''/>
                            <div className="buttons">
                                <button type="submit" onClick={() => {
                                    addTTU();
                                }} className="btn btn-dark">{lt('search.btn2')}</button>
                                <button type="reset" value="Reset"
                                        className={disable ? 'btn btn-dark btn-clear disable' : 'btn btn-dark btn-clear'}>{lt('search.btn3')}</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <section className={hide ? 'search-result hide_result' : 'search-result'}>
                <div className="container">
                    <h4>{lt('search.h4_3')}</h4>
                    <div className="seacrh_sort">
                        <div>
                            <span>{lt('search.sort.sorting')}</span>
                            <select className='sort_select' name="" id="">
                                <option value="">{lt('search.sort.cost_low_to_high')}</option>
                                <option value="">{lt('search.sort.cost_high_to_low')}</option>
                                <option value="">{lt('search.sort.duration_min_to_max')}</option>
                                <option value="">{lt('search.sort.duration_max_to_min')}</option>
                            </select>
                        </div>
                    </div>
                    <div className='card-items'>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </section>
        </main>
    )
};

export default Search;