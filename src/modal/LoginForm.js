import React, {useContext} from "react";
import {HandleHeaderContext} from "../App.js"

function LoginForm(){
    const {closeForm, openRegisterForm} = useContext(HandleHeaderContext)
    return(
        <div className="auth-form">
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
                    <div className="auth-form__group">
                        <input type="text" placeholder="Email của bạn" className="auth-form__input"/>
                    </div>
                    <div className="auth-form__group">
                        <input type="password" placeholder="Mật khẩu của bạn" className="auth-form__input"/>
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
                    <button className="btn btn--primary">ĐĂNG NHẬP</button>
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
        </div>
    )
}

export default LoginForm