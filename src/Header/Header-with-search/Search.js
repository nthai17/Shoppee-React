import React from 'react';
const searchHistory = [
    {
        name: 'Kem trị mụn'
    },
    {
        name: 'Kem trắng da'
    }
]
function Search(){
    const renderSearchHistory = function(list){
        if (list.length > 0) {
            return (
                <div className="header__search-history">
                    <h3 className="header__search-history-headding">Lịch sử tìm kiếm</h3>
                    <ul className="header__search-history-list">
                        {list.map((item, index) => {
                            return (
                                <li key={index} className="header__search-history-item"><a href="#root">{item.name}</a></li>
                            )
                        })}
                    </ul>
                </div>
            )
        } else {
            return (<h3 className="header__search-history-headding">Không có lịch sử gần đây</h3>)
        }
    }
    
    return (
        <div className="header__search">
            <div className="header__search-input-wrap">
                <input type="text" placeholder="Nhập để tìm kiếm" className="header__search-input"/>
                {/* <!-- Search history --> */}
                {renderSearchHistory(searchHistory)}
            </div>
            {/* <!-- Search select --> */}
            <div className="header__search-select">
                <span className="header__search-select-lable">Trong shop</span>
                <i className="header__search-select-icon fas fa-angle-down"></i>
                <ul className="header__search-option">
                    <li className="header__search-option-item header__search-option-item--active">
                        <span>Trong shop</span>
                        <i className="fas fa-check"></i>
                    </li>
                    <li className="header__search-option-item">
                        <span>Ngoài shop</span>
                        <i className="fas fa-check"></i>
                    </li>
                </ul>
            </div>
            {/* <!-- Search button --> */}
            <button className="header__search-btn">
                <i className="header__search-btn-icon fas fa-search"></i>
            </button>
        </div>
    )
}

export default Search