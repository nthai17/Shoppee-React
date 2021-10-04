import React from "react";
const mbCategoryList = [
    {
        name: 'Phụ kiện & Thiết bị tiện ích'
    },
    {
        name: 'Phụ kiện & Thiết bị tiện ích'
    },
    {
        name: 'Phụ kiện & Thiết bị tiện ích'
    },
    {
        name: 'Phụ kiện & Thiết bị tiện ích'
    },
    {
        name: 'Phụ kiện & Thiết bị tiện ích'
    },
    {
        name: 'Phụ kiện & Thiết bị tiện ích'
    },
    {
        name: 'Phụ kiện & Thiết bị tiện ích'
    },
    {
        name: 'Phụ kiện & Thiết bị tiện ích'
    },
    {
        name: 'Phụ kiện & Thiết bị tiện ích'
    },
]
function MobileCategory(){
    const renderMbCategoryList = function(list){
        return (
            <ul className="mobile-category__list">
                {list.map((item, index)=>{
                    return (
                        <li key={index} className="mobile-category__item">
                            <a href="#root" className="mobile-category__link">
                                {item.name} 
                            </a>
                        </li>
                    )
                })}
            </ul>
        )
    }
    return(
        <div className="mobile-category">
            {renderMbCategoryList(mbCategoryList)}
        </div>
    )
}

export default MobileCategory