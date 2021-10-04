import React, {useContext, useState} from 'react';
import {HandleHeaderContext} from "../../App.js"

function NavRight() {
    const {handleLogOut, openLoginForm, openRegisterForm, isLogOut, UserLoggingInData} = useContext(HandleHeaderContext)
    const [IsOpenUserInfo, setIsOpenUserInfo] = useState(false)
    const [IsOpenUserNotify, setIsOpenUserNotify] = useState(false)
    const renderNotifyList = function(list){
        if(list.length > 0) {
            return (
                list.map((item, index)=>{
                    return (
                        <li key={index} className="header__notify-item">
                            <a href="#root" className="header__notify-link">
                                <img className="header__notify-img" src={item.img} alt="hình ảnh"/>
                                <div className="header__notify-info">
                                    <span className="header__notify-name">{item.name}</span>
                                    <span className="header__notify-desc">{item.desc}</span>
                                </div>
                            </a>
                        </li>
                    )
                })
            )
        }
    }
    const openUserInfo = function(e){
        e.preventDefault();
        e.stopPropagation()
        setIsOpenUserInfo(!IsOpenUserInfo)
    }
    const openUserNotify = function(e){
        e.preventDefault();
        e.stopPropagation()
        setIsOpenUserNotify(!IsOpenUserNotify)
    }
    window.onclick = function(event){
        if (!event.target.closest('.header__notify') && IsOpenUserNotify){
            setIsOpenUserNotify(!IsOpenUserNotify)
        }
        if (!event.target.closest('.header__navbar-user-info') && IsOpenUserInfo){
            setIsOpenUserInfo(!IsOpenUserInfo)
        }
    }
    const renderLogInOut = function(isLogOut){
        if(!isLogOut){
            return (
                <React.Fragment>
                    <li className="header__navbar-item">
                        <a href="#root"className="header__navbar-item-link header__navbar-item-link--strong"
                            onClick={()=>{openRegisterForm()}}
                        >
                            Đăng ký
                        </a>
                    </li>
                    <li className="header__navbar-item">
                        <a href="#root" className="header__navbar-item-link header__navbar-item-link--strong"
                            onClick={()=>{openLoginForm()}}
                        >
                            Đăng nhập
                        </a>
                    </li>
                </React.Fragment>
            )
        } else{
            return(
                <li className="header__navbar-item header__navbar-user">
                    <a href="#root" onClick={(e)=>openUserInfo(e)} className="header__navbar-item-link">
                        <img src={UserLoggingInData.avatar} alt="hình ảnh" className="header__navbar-user-avt"/>
                        <span className="header__navbar-user-name">{UserLoggingInData.email}</span>
                    </a>
                    {(IsOpenUserInfo) 
                    ?  
                    <ul className="header__navbar-user-info">
                        <li className="header__navbar-user-item">
                            <a href="#root">Tài khoản của tôi</a>
                        </li>
                        <li className="header__navbar-user-item">
                            <a href="#root">Đơn mua</a>
                        </li>
                        <li className="header__navbar-user-item header__navbar-user-item--separate">
                            <a href="#root" onClick={()=>
                                {
                                    setIsOpenUserInfo(!IsOpenUserInfo)
                                    handleLogOut()
                                }} 
                            >
                                Đăng xuất
                            </a>
                        </li>
                    </ul>
                    :
                    null
                    }
                </li>
            )
        }
    }
    return (
        <ul className="header__navbar-list">
            <li className="header__navbar-item header__navbar-item--has-notify">
                <a href="#root" onClick={(e)=>openUserNotify(e)} className="header__navbar-item-link"><i className="ti-bell"></i>
                    Thông báo
                </a>
                {(IsOpenUserNotify)
                ?
                <div className="header__notify">
                    {!isLogOut 
                    ?
                    <React.Fragment>
                        <img className="notify__logout-img" alt="hình ảnh"
                            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/99e561e3944805a023e87a81d4869600.png"
                        ></img>
                        <span className="notify__logout-mes">Đăng nhập để xem thông báo nha!</span>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <header className="header_notify-header">Thông Báo Mới Nhận</header>
                        <ul className="header__notify-list">
                            {renderNotifyList(UserLoggingInData.notify)}
                        </ul>
                        <footer className="header_notify-footer">
                            <a href="#root" className="header_notify-footer-link">
                                Xem tất cả
                            </a>
                        </footer>
                    </React.Fragment>
                    }
                </div>
                :
                null
                }
            </li>
            <li className="header__navbar-item">
                <a href="#root" className="header__navbar-item-link"><i className="ti-help-alt"></i>Trợ giúp</a>
            </li>
            {renderLogInOut(isLogOut)}
        </ul>
    )
}

export default NavRight