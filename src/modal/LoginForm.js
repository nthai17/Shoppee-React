import React, {useContext, useEffect, useState} from "react";
import {HandleHeaderContext} from "../App.js"
import validator from "./validator2.js";
function LoginForm(){
    const {closeForm, openRegisterForm, showUserLoggingIn, listUsers} = useContext(HandleHeaderContext)
    const [IsFailLogin, setIsFailLogin] = useState(false)
    useEffect(()=>{
        const form = new validator("#form-login")
        form.onSubmit = function(data){
            let userLoggingIn = listUsers.find((user)=>{
                return (user.email === data.email) && (user.password === data.password)
            })
            if(userLoggingIn){
                showUserLoggingIn(userLoggingIn);
                closeForm();
            } else {
                setIsFailLogin(true)
            }
        }
    },[listUsers, showUserLoggingIn, closeForm])
    return(
        <form className="auth-form" id="form-login">
            <div className="auth-form__container">
                <div className="auth-form__header">
                    <h3 className="auth-form__heading">Đăng nhập</h3>
                    <span className="auth-form__switch-btn"
                        onClick={()=>openRegisterForm()}
                    >
                        Đăng ký
                    </span>
                </div>
                <div className="auth-form__form">
                    {IsFailLogin
                    ?
                    <div className="auth-form__group">
                        <span className="form-message failed">Sai email hoặc mật khẩu! Vui lòng thử lại.</span>
                    </div>
                    :
                    null
                    }
                    <div className="auth-form__group form-group">
                        <input type="text" name="email" rules="required|email" placeholder="Email của bạn" className="auth-form__input"/>
                        <span className="form-message"></span>
                    </div>
                    <div className="auth-form__group form-group">
                        <input type="password" name="password" rules="required|min:6" placeholder="Mật khẩu của bạn" className="auth-form__input"/>
                        <span className="form-message"></span>
                    </div>
                </div>
                <div className="auth-form__aside">
                    <div className="auth-form__help">
                        <a href="#root" className="auth-form__help-link auth-form__help-forgot">Quên mật khẩu</a>
                        <span className="auth-form__help-sepatate"></span>
                        <a href="#root" className="auth-form__help-link">Cần trợ giúp?</a>
                    </div>
                </div>
                <div className="auth-form__controls">
                    <button className="btn btn--nomal auth-form__controls-back"
                        onClick={()=>closeForm()}
                    >
                        TRỞ LẠI
                    </button>
                    <button type="submit" className="btn btn--primary">ĐĂNG NHẬP</button>
                </div>
            </div>
            <div className="auth-form__socials">
                <a href="#root" className="btn auth-form__socials--facebook btn--with-icon">
                    <i className="auth-form__socials-icon fab fa-facebook-square"></i>
                    <span className="auth-form__socials-title">Kết nối với Facebook</span>
                </a>
                <a href="#root" className="btn auth-form__socials--google btn--with-icon">
                    <i className="auth-form__socials-icon fab fa-google"></i>
                    <span className="auth-form__socials-title">Kết nối với Google</span>
                </a>
            </div>
        </form>
    )
}

export default LoginForm