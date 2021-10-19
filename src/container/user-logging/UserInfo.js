import React, { useEffect } from "react";
import { Route, Link, useRouteMatch, useLocation } from "react-router-dom";
import UserItem from "./UserItem"
function UserInfo (){
    let match = useRouteMatch() 
    let { pathname } = useLocation()
    const togleSubnav = function(e){
        const subnavList = document.querySelectorAll('.category-subnav')
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
    useEffect(()=>{
        const listSubLink = document.querySelectorAll('.subnav-link')
        const listItemLink = document.querySelectorAll('.category-item-link')
        if(listSubLink){
            listSubLink.forEach(link=>{
                link.classList.remove('active')
                if(link.pathname === pathname){
                    link.classList.add('active')
                }
            })
        }
        if(listItemLink){
            listItemLink.forEach(link=>{
                link.classList.remove('active')
                if(pathname.includes(link.dataset.name)){
                    link.classList.add('active')
                }
            })
        }
    }, [pathname])
    return(
        <React.Fragment>
            <div className="col l-2 m-0 c-0">
                <nav className="category user__list">
                    <ul>
                        <li className="category-item">
                            <Link to={`${match.url}/account/profile`} data-name="account" className="category-item-link"
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
                            <Link to={`${match.url}/purchase`} data-name="purchase" className="category-item-link"
                                onClick={(e)=>{togleSubnav(e)}}
                            >
                                <i className="category-link-icon"/>
                                <span>Đơn mua</span>
                            </Link>
                        </li>
                        <li className="category-item">
                            <Link to={`${match.url}/notify/order`} data-name="notify" className="category-item-link"
                                onClick={(e)=>{togleSubnav(e)}}
                            >
                                <i className="category-link-icon"/>
                                <span>Thông báo</span>
                            </Link>
                            <ul className="category-subnav" style={{display: "none"}}>
                                <li>
                                    <Link to={`${match.url}/notify/order`} className="subnav-link">Order</Link>
                                </li>
                                <li>
                                    <Link to={`${match.url}/notify/promotion`} className="subnav-link">Promotion</Link>
                                </li>
                                <li>
                                    <Link to={`${match.url}/notify/wallet`} className="subnav-link">Wallet</Link>
                                </li>
                                <li>
                                    <Link to={`${match.url}/notify/activity`} className="subnav-link">Activity</Link>
                                </li>
                                <li>
                                    <Link to={`${match.url}/notify/rating`} className="subnav-link">Rating</Link>
                                </li>
                                <li>
                                    <Link to={`${match.url}/notify/shopee`} className="subnav-link">Shopee</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="category-item">
                            <Link to={`${match.url}/vouchers`} data-name="vouchers" className="category-item-link"
                                onClick={(e)=>{togleSubnav(e)}}
                            >
                                <i className="category-link-icon"/>
                                <span>Kho voucher</span>
                            </Link>
                        </li>
                        <li className="category-item">
                            <Link to={`${match.url}/coins`} data-name="coins" className="category-item-link"
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