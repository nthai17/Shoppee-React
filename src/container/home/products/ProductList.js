import React from "react";

function ProductList({listProduct, page, productPerPage }){
    const listPerPage = listProduct.slice(productPerPage*(page-1), productPerPage*page)
    const renderListProduct = function(list){
        if (list.length > 0) {
            return (
                <React.Fragment>
                    {list.map((item, index)=> {
                        return (
                            <div key={index} className="col l-2-4 m-4 c-6">
                                {/* <!-- product item --> */}
                                <a className="home-product-item" href="#root">
                                    <div className="home-product-item__img" style={{backgroundImage: 'url('+item.img+')'}}></div>
                                    <h5 className="home-product-item__name">
                                        {item.name}
                                    </h5>
                                    <span className="home-product-item__price-old">{item.oldPrice}</span>
                                    <span className="home-product-item__price-current">{item.curPrice}</span>
                                    <div className="home-product-item__action">
                                        <span className={(item.isLiked) ? "home-product-item__like home-product-item__like--liked" : "home-product-item__like"}>
                                            <i className="home-product-item__like-empty far fa-heart"></i>
                                            <i className="home-product-item__like-fill fas fa-heart"></i>
                                        </span>
                                        <div className="home-product-item__rating">
                                            <i className="home-product-item__rating-gold fas fa-star"></i>
                                            <i className="home-product-item__rating-gold fas fa-star"></i>
                                            <i className="home-product-item__rating-gold fas fa-star"></i>
                                            <i className="home-product-item__rating-gold fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <span className="home-product-item__sold">{item.sold}</span>
                                    </div>
                                    <div className="home-product-item__origin">
                                        <span className="home-product-item__brand">{item.brand}</span>
                                        <span className="home-product-item__madein">{item.madeIn}</span>
                                    </div>
                                    <div className="home-product-item__favourite">
                                        <i className="fas fa-check"></i>
                                        <span>Yêu thích</span>
                                    </div>
                                    <div className="home-product-item__sale-off">
                                        <span className="home-product-item__sale-off-persent">{item.salePersent}</span>
                                        <span className="home-product-item__sale-off-label">GIẢM</span>
                                    </div>         
                                </a>
                            </div>
                        )
                    })}
                </React.Fragment>
            )
        }
    }
    return (
        <div className="home-product">
            <div className="row sm-gutter">
                {renderListProduct(listPerPage)}
            </div>
        </div>
    )
}

export default ProductList