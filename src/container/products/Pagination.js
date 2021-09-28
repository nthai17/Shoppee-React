import React from "react";

const renderPagination = function(number, changePage, activePage){
    const handelChangeCurrentPage = function(e, item){
        e.preventDefault()
        let paginationItems = document.querySelectorAll('.pagination-item:not(:first-child)')
        for(let i of paginationItems){
            i.classList.remove('pagination-item--active')
        }
        paginationItems[item-1].classList.add('pagination-item--active')
        changePage(item)
    }
    if(number > 0){
        let arrPages = []
        for(let i = 1; i<=number; i++){
            arrPages.push(i);
        }
        return(
            arrPages.map((item)=>{
                return (
                    <li key={item} className={item===activePage ? "pagination-item pagination-item--active" : "pagination-item"}>
                        <a href="#root" className="pagination-link" 
                        onClick={(e)=>{handelChangeCurrentPage(e, item)}}>{item}</a>
                    </li>
                )  
            })  
        ) 
    }
}
function Pagination({numberOfPages, changePage, activePage, nextPage, prevPage}){
    return(
        <ul className="pagination home-product__pagination">
            <li className="pagination-item">
                <a href="#root" className="pagination-link" onClick={(e)=>{prevPage(e)}}>
                    <i className="fas fa-angle-left"></i>
                </a>
            </li>
            {renderPagination(numberOfPages, changePage, activePage)}
            <li className="pagination-item">
                <a href="#root" className="pagination-link" onClick={(e)=>{nextPage(e)}}>
                    <i className="fas fa-angle-right"></i>
                </a>
            </li>
        </ul> 
    )
}

export default Pagination