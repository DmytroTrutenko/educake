import React from "react";
import counterpart from "counterpart";
import ttu from "../assets/ttu.jpg";


const Card = () => {

    //функция смены языка
    const lt = (str) => {
        return counterpart.translate(str)
    };

    return (
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
                    <a href="https://www.ttu.ee/" className="btn btn-dark">{lt('search.btn4')}</a>
                </div>
            </div>
    )
};

export default Card;