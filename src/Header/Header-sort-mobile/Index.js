import React from 'react';

function HeaderSortMobile(){
    return (
        <ul className="header__sort-bar">
            <li className="header__sort-item">
                <a href="#root" className="header__sort-link">Liên quan</a>
            </li>
            <li className="header__sort-item header__sort-item--active">
                <a href="#root" className="header__sort-link">Mới nhất</a>
            </li>
            <li className="header__sort-item">
                <a href="#root" className="header__sort-link">Bán chạy</a>
            </li>
            <li className="header__sort-item">
                <a href="#root" className="header__sort-link">Giá</a>
            </li>
        </ul>
    )
}

export default HeaderSortMobile