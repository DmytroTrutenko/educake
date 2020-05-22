import React from "react";
import PriceSlider from "./PriceSlider";
import DurationSlider from "./DurationSlider";
import ttu from '../assets/ttu.jpg';

const Search = () => {

    return (
        <main className="main">
            <section className='search-form_section'>
                <div className="container">
                    <form action="#" className="searh-form">
                        <div className="block-left">
                            <div className="input_group">
                                <p>Название университета:</p><input type="text"/>
                            </div>
                            <div className="input_group">
                                <p>Направление:</p><input type="text"/>
                            </div>
                            <div className="input_group">
                                <p>Степень образования:</p>
                                <select name="" id="">
                                    <option value="Бакалавр">Бакалавр</option>
                                    <option value="Магистр">Магистр</option>
                                    <option value="Специалист">Специалист</option>
                                </select>
                            </div>
                            <div className="input_group">
                                <p>Форма обучения:</p>
                                <select name="" id="">
                                    <option value="Очная">Очная</option>
                                    <option value="Заочная">Заочная</option>
                                    <option value="Очно-заочная">Очно-заочная</option>
                                </select>
                            </div>
                            <div className="input_group">
                                <p>Местоположение:</p>
                                <select name="" id="">
                                    <option value="Таллин">Таллин</option>
                                    <option value="Тарту">Тарту</option>
                                    <option value="Нарва">Нарва</option>
                                </select>
                            </div>
                            <div className="input_group">
                                <p>Язык обучения</p>
                                <div className="cust-checkbox">
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="ru"/>
                                    <label htmlFor="vehicle1">Русский</label>
                                    <input type="checkbox" id="vehicle2" name="vehicle2" value="eng"/>
                                    <label htmlFor="vehicle2">Аглийский</label>
                                    <input type="checkbox" id="vehicle3" name="vehicle3" value="esst"/>
                                    <label htmlFor="vehicle3">Эстонский</label>
                                </div>
                            </div>


                        </div>
                        <div className="block-right">
                            <p>Стоимость обучения</p>
                            <PriceSlider/>
                            <p>Длительность обучения</p>
                            <DurationSlider/>
                            <div className="buttons">
                                <a href="#" className="btn btn-dark">Поиск</a>
                                <a href="#" className="btn btn-dark btn-clear">Очистить</a>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <section className="search-result">
                <div className="container">
                    <h4>Результаты поиска</h4>
                    <div className="card-items">
                        <div className="item">
                            <div className="name-img">
                                <h3>Таллинский технический университет</h3>
                                <img src={ttu} alt="img"/>
                            </div>
                            <div className="desc">
                                <p>Бакалавр, Магистр</p>
                                <p>Обучение: заочное или очное</p>
                                <p>Язык обучения: Анг, Эст</p>
                                <p>Таллин</p>
                            </div>
                            <div className="price-btn">
                                <p>Веб-технологии</p>
                                <span>Годовая оплата: 3860€</span>
                                <a href="#" className="btn btn-dark">Узнать больше</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
};

export default Search;