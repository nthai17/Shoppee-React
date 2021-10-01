import React, {useEffect, useState} from "react";
import Category from "./Category";
import Products from "./products/Products";

function Container(){
    let [listProduct, setListProduct] = useState([])
    useEffect(()=>{
        (async ()=>{
            await fetch('http://localhost:8000/listProduct')
            .then(res=>res.json())
            .then(data=>setListProduct(data))
        })()
    }, [])
    return(
        <div id="container">
            <div className="grid wide">
                <div className="row sm-gutter container-content">
                    <Category/>
                    <Products listProduct={listProduct}/>
                </div>
            </div>
        </div>
    )
}

export default Container