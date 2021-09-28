import React from "react";

function ProductFillter(){
    return (
        <div className="home-filter hide-on-mobile-tablet">
            <span className="home-filter__label">Sắp xếp theo</span>
            <button className="home-filter__btn btn">Phổ biến</button>
            <button className="home-filter__btn btn btn--primary">Mới nhất</button>
            <button className="home-filter__btn btn">Bán chạy</button>
            <div className="select-input">
                <span className="select-input__label">Giá</span>
                <i className="select-input__icon fas fa-angle-down"></i>
                <ul className="select-input__list">
                    <li className="select-input__item">
                        <a href="#root" className="select-input__link">Giá: Thấp đến cao</a>
                    </li>
                    <li className="select-input__item">
                        <a href="#root" className="select-input__link">Giá: Cao đến thấp</a>
                    </li>
                </ul>
            </div>
            <div className="home-filter__page">
                <span className="home-filter__page-num">
                    <span className="home-filter__page-current">1</span>/15
                </span>
                <div className="home-filter__page-control">
                    <a href="#root" className="home-filter__page-btn home-filter__page-btn--disable">
                        <i className="home-filter__page-icon fas fa-angle-left"></i>
                    </a>
                    <a href="#root"  className="home-filter__page-btn">
                        <i className="home-filter__page-icon fas fa-angle-right"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProductFillter