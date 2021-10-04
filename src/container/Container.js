import React, {useEffect, useState} from "react";
import { Route } from "react-router";
import Category from "./home/Category";
import Products from "./home/products/Products";
import UserInfo from "./user-logging/UserInfo"

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
                    <Route exact path="/">
                        <Category/>
                        <Products listProduct={listProduct}/>
                    </Route>
                    <Route path="/userinfo">
                        <UserInfo />
                    </Route>
                </div>
            </div>
        </div>
    )
}

export default Container