import React, { useEffect, useState } from "react";
import MobileCategory from "./MobileCategory.js"
import ProductList from "./ProductList.js"
import Pagination from "./Pagination.js"
import ProductFillter from "./ProductFillter.js"

function Products({listProduct}){
    let [page, setPage] = useState(1)
    let [activePage, setActivePage] = useState(1)
    const productPerPage = 10;
    const productsQnt = listProduct.length;
    const numberOfPages = Math.ceil(productsQnt/productPerPage)
    
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[page, activePage]);
    
    const changePage = function(curPage){
        setPage(curPage)
        setActivePage(curPage)
    }
    const nextPage = function(e){
        e.preventDefault();
        if(activePage < numberOfPages){
            setActivePage(activePage+1)
            setPage(page+1)
        }
    }
    const prevPage = function(e){
        e.preventDefault();
        if(activePage > 1){
            setActivePage(activePage-1)
            setPage(page-1)
        }
    }
    return (
        <div className="col l-10 m-12 c-12">
            <ProductFillter/>
            <MobileCategory/>
            <ProductList listProduct={listProduct} productPerPage={productPerPage} page={page}/>
            <Pagination 
                numberOfPages={numberOfPages} 
                changePage={changePage} 
                activePage={activePage}
                nextPage={nextPage}
                prevPage={prevPage}
            />
        </div>

    )
}

export default Products