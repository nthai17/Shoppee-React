import React from "react";
import Category from "./Category";
import Products from "./products/Products";

function Container(){
    return(
        <div id="container">
            <div className="grid wide">
                <div className="row sm-gutter container-content">
                    <Category/>
                    <Products/>
                </div>
            </div>
        </div>
    )
}

export default Container