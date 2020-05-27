import React, {Component} from "react";
import PriceSlider from "./PriceSlider";
import DurationSlider from "./DurationSlider";
import counterpart from 'counterpart';
import Card from "./Card";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            areas: '',
            grade: '',
            type: '',
            location: '',
            disable: true,
            ru: false,
            en: false,
            est: false
        };
        this.handleName = this.handleName.bind(this);
        this.handleAreas = this.handleAreas.bind(this);
        this.handleGrade = this.handleGrade.bind(this);
        this.handleType = this.handleType.bind(this);
        this.handleLocation = this.handleLocation.bind(this);
        this.handleRu = this.handleRu.bind(this);
        this.handleEn = this.handleEn.bind(this);
        this.handleEst = this.handleEst.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleName(event) {
        this.setState({name: event.target.value});
    }

    handleAreas(event) {
        this.setState({areas: event.target.value});
    }

    handleGrade(event) {
        this.setState({grade: event.target.value});
    }

    handleType(event) {
        this.setState({type: event.target.value});
    }

    handleLocation(event) {
        this.setState({location: event.target.value});
    }

    handleRu(event) {
            this.setState({ru: event.target.value});
    }
    handleEn(event) {
        this.setState({en: event.target.value});
    }
    handleEst(event) {
        this.setState({est: event.target.value});
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }


    lt(str) {
        return counterpart.translate(str)
    }


    render() {
        const option1 = this.lt('search.select.option1'),
            option2 = this.lt('search.select.option2'),
            option3 = this.lt('search.select.option3'),
            option4 = this.lt('search.select.option4'),
            option5 = this.lt('search.select.option5'),
            option6 = this.lt('search.select.option6'),
            option7 = this.lt('search.select.option7'),
            option8 = this.lt('search.select.option8'),
            option9 = this.lt('search.select.option9'),
            label1 = this.lt('search.label1'),
            label2 = this.lt('search.label2'),
            label3 = this.lt('search.label3');


        return (
            <main className="main">
                <section className='search-form_section'>
                    <div className="container">


                        <form onChange={() => {
                            this.setState({disable: false});
                        }} onSubmit={this.handleSubmit}
                              className='searh-form'>

                            <div className="block-left">
                                <div className="input_group">
                                    <p>{this.lt('search.p2')}</p><input type="text" value={this.state.name} onChange={this.handleName}/>
                                </div>
                                <div className="input_group">
                                    <p>{this.lt('search.p3')}</p><input type="text" value={this.state.areas} onChange={this.handleAreas}/>
                                </div>
                                <div className="input_group">
                                    <p>{this.lt('search.p4')}</p>
                                    <select value={this.state.grade} onChange={this.handleGrade}>
                                        <option value=''></option>
                                        <option value={option1}>{option1}</option>
                                        <option value={option2}>{option2}</option>
                                        <option value={option3}>{option3}</option>
                                    </select>
                                </div>
                                <div className="input_group">
                                    <p>{this.lt('search.p5')}</p>
                                    <select value={this.state.type} onChange={this.handleType}>
                                        <option value=''></option>
                                        <option value={option4}>{option4}</option>
                                        <option value={option5}>{option5}</option>
                                        <option value={option6}>{option6}</option>
                                    </select>
                                </div>
                                <div className="input_group">
                                    <p>{this.lt('search.p6')}</p>
                                    <select value={this.state.location} onChange={this.handleLocation}>
                                        <option value=''></option>
                                        <option value={option7}>{option7}</option>
                                        <option value={option8}>{option8}</option>
                                        <option value={option9}>{option9}</option>
                                    </select>
                                </div>
                                <div className="input_group">
                                    <p>{this.lt('search.p7')}</p>
                                    <div className="cust-checkbox">
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value='ru' checked={this.state.ru}
                                               onChange={this.handleRu}/>
                                        <label htmlFor="vehicle1">{label1}</label>
                                        <input type="checkbox" id="vehicle2" name="vehicle2" value='en' checked={this.state.en}
                                               onChange={this.handleEn}/>
                                        <label htmlFor="vehicle2">{label2}</label>
                                        <input type="checkbox" id="vehicle3" name="vehicle3" value='est' checked={this.state.est}
                                               onChange={this.handleEst}/>
                                        <label htmlFor="vehicle3">{label3}</label>
                                    </div>
                                </div>
                            </div>
                            <div className="block-right">
                                <p>{this.lt('search.p8')}</p>
                                <PriceSlider value/>
                                <p>{this.lt('search.p9')}</p>
                                <DurationSlider value=''/>
                                <div className="buttons">
                                    <button type="submit" onClick={() => {

                                    }} className="btn btn-dark">{this.lt('search.btn2')}</button>
                                    <button type="reset" value="Reset"
                                            className={this.disable ? 'btn btn-dark btn-clear disable' : 'btn btn-dark btn-clear'}>{this.lt('search.btn3')}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
                <section className='search-result'>
                    <div className="container">
                        <h4>{this.lt('search.h4_3')}</h4>
                        <div className="seacrh_sort">
                            <div>
                                <span>{this.lt('search.sort.sorting')}</span>
                                <select className='sort_select' name="" id="">
                                    <option value="">{this.lt('search.sort.cost_low_to_high')}</option>
                                    <option value="">{this.lt('search.sort.cost_high_to_low')}</option>
                                    <option value="">{this.lt('search.sort.duration_min_to_max')}</option>
                                    <option value="">{this.lt('search.sort.duration_max_to_min')}</option>
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
    }
}

export default Search;