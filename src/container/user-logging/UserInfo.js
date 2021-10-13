import React from "react";
import { Route, Link, useRouteMatch } from "react-router-dom";
import UserItem from "./UserItem"
function UserInfo (){
    let match = useRouteMatch()
    const togleSubnav = function(e){
        const subnavList = document.querySelectorAll('.category-subnav')
        console.log(subnavList);
        const subnavOfTarget = e.target.closest('.category-item').querySelector('.category-subnav')
        if(subnavList){
            subnavList.forEach((item)=>{
                item.style.display = "none"
            })
        }
        if(subnavOfTarget){
            subnavOfTarget.style.display = "block"
        }
    }
    return(
        <React.Fragment>
            <div className="col l-2 m-0 c-0">
                <nav className="category user__list">
                    <ul>
                        <li className="category-item">
                            <Link to={`${match.url}/account/profile`} className="category-item-link"
                                onClick={(e)=>{togleSubnav(e)}}
                            >
                                <i className="category-link-icon"/>
                                <span>Tài khoản của tôi</span>
                            </Link>
                            <ul className="category-subnav">
                                <li>
                                    <Link to={`${match.url}/account/profile`} className="subnav-link">Profile</Link>
                                </li>
                                <li>
                                    <Link to={`${match.url}/account/payment`} className="subnav-link">Payment</Link>
                                </li>
                                <li>
                                    <Link to={`${match.url}/account/address`} className="subnav-link">Address</Link>
                                </li>
                                <li>
                                    <Link to={`${match.url}/account/password`} className="subnav-link">Password</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="category-item">
                            <Link to={`${match.url}/purchase`} className="category-item-link"
                                onClick={(e)=>{togleSubnav(e)}}
                            >
                                <i className="category-link-icon"/>
                                <span>Đơn mua</span>
                            </Link>
                        </li>
                        <li className="category-item">
                            <Link to={`${match.url}/notify/order`} className="category-item-link"
                                onClick={(e)=>{togleSubnav(e)}}
                            >
                                <i className="category-link-icon"/>
                                <span>Thông báo</span>
                            </Link>
                            <ul className="category-subnav" style={{display: "none"}}>
                                <li>
                                    <Link to={`${match.url}/notify/order`} className="subnav-link">order</Link>
                                </li>
                                <li>
                                    <Link to={`${match.url}/notify/promotion`} className="subnav-link">promotion</Link>
                                </li>
                                <li>
                                    <Link to={`${match.url}/notify/wallet`} className="subnav-link">wallet</Link>
                                </li>
                                <li>
                                    <Link to={`${match.url}/notify/activity`} className="subnav-link">activity</Link>
                                </li>
                                <li>
                                    <Link to={`${match.url}/notify/rating`} className="subnav-link">rating</Link>
                                </li>
                                <li>
                                    <Link to={`${match.url}/notify/shopee`} className="subnav-link">shopee</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="category-item">
                            <Link to={`${match.url}/vouchers`} className="category-item-link"
                                onClick={(e)=>{togleSubnav(e)}}
                            >
                                <i className="category-link-icon"/>
                                <span>Kho voucher</span>
                            </Link>
                        </li>
                        <li className="category-item">
                            <Link to={`${match.url}/coins`} className="category-item-link"
                                onClick={(e)=>{togleSubnav(e)}}
                            >
                                <i className="category-link-icon"/>
                                <span>Shopee xu</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="col l-10 m-12 c-12 user__content">
                <Route path={`${match.path}/:item`}>
                    <UserItem/>
                </Route>
            </div>
        </React.Fragment>
    )
}

export default UserInfo