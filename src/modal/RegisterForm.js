import React, {useContext} from "react";
import {HandleHeaderContext} from "../App.js"

function RegisterForm(){
    const {closeForm, openLoginForm} = useContext(HandleHeaderContext)
    return(
        <div className="auth-form">
            <div className="auth-form__container">
                <div className="auth-form__header">
                    <h3 className="auth-form__heading">Đăng ký</h3>
                    <span className="auth-form__switch-btn"
                        onClick={()=>openLoginForm()}
                    >
                        Đăng nhập
                    </span>
                </div>
                <div className="auth-form__form">
                    <div className="auth-form__group">
                        <input type="text" placeholder="Email của bạn" className="auth-form__input"/>
                    </div>
                    <div className="auth-form__group">
                        <input type="password" placeholder="Mật khẩu của bạn" className="auth-form__input"/>
                    </div>
                    <div className="auth-form__group">
                        <input type="password" placeholder="Nhập lại mật khẩu" className="auth-form__input"/>
                    </div>
                </div>
                <div className="auth-form__aside">
                    <p className="auth-form__policy-text">
                        Bằng việc đăng ký, bạn đã đồng ý với Shopee về 
                        <a href="#root" className="auth-form__text-link">Điều khoản dịch vụ</a> &
                        <a href="#root" className="auth-form__text-link">Chính sách bảo mât.</a>
                    </p>
                </div>
                <div className="auth-form__controls">
                    <button className="btn btn--nomal auth-form__controls-back"
                        onClick={()=>closeForm()}
                    >
                        TRỞ LẠI
                    </button>
                    <button className="btn btn--primary">ĐĂNG KÝ</button>
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

export default RegisterForm
