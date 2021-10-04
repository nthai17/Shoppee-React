import React from "react";


const categoryList = [
    {
        name: 'Dép nhựa',
    },
    {
        name: 'Giày thể thao',
    },
    {
        name: 'Giày cao gót',
    },
]
function Category(){
    const RenderCategoryList = function(list){
        if (list.length > 0) {
            return (
                <ul className="category-list">
                    {list.map((item, index)=>{
                        if(index === 0){
                            return (
                                <li key={index} className="category-item category-item--active">
                                    <a href="#root" className="category-item-link">{item.name}</a>
                                </li>
                            )
                        }
                        return (
                            <li key={index} className="category-item">
                                <a href="#root" className="category-item-link">{item.name}</a>
                            </li>
                        )
                    })}
                </ul>
            )
        }
    }
    return (
        <div className="col l-2 m-0 c-0">
            <nav className="category">
                <h3 className="category-heading">
                    <i className="category-heading-icon fas fa-list"></i>
                    Danh mục
                </h3>
                {RenderCategoryList(categoryList)}
            </nav>
        </div>
    )
}

export default Category