import React, {useContext, useState, useEffect} from "react";
import {HandleHeaderContext} from "../App.js"
import validator from "./validator2.js";
function RegisterForm(){
    const {closeForm, openLoginForm, listUsers, handleAddUser} = useContext(HandleHeaderContext)
    const [isExist, setIsExist] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    console.log(listUsers);
    useEffect(()=>{
        const form = new validator("#form-register")
        form.onSubmit = function(data){
            let hasExist = listUsers.some((user)=>{
                return (user.email === data.email)
            })
            if(!hasExist){
                handleAddUser(data);
                setIsExist(false)
                setIsSuccess(true)
            } else {
                setIsExist(true)
            }
        }
    },[listUsers, handleAddUser])
    return(
        <form className="auth-form" id="form-register">
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
                    {isExist
                    ?
                    <div className="auth-form__group">
                        <span className="form-message failed">Email đã tồn tại, vui lòng thử lại</span>
                    </div>
                    :isSuccess
                    ?
                    <div className="auth-form__group">
                        <span className="form-message success">Đăng ký thành công! Đăng nhập để tiếp tục.</span>
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
                    <div className="auth-form__group form-group">
                        <input type="password" name="re-password" rules="required|confirm" placeholder="Nhập lại mật khẩu" className="auth-form__input"/>
                        <span className="form-message"></span>
                    </div>
                </div>
                <div className="auth-form__aside">
                    <p className="auth-form__policy-text">
                        Bằng việc đăng ký, bạn đã đồng ý với Shopee về 
                        <a href="#root" className="auth-form__text-link"> Điều khoản dịch vụ</a> & 
                        <a href="#root" className="auth-form__text-link"> Chính sách bảo mât.</a>
                    </p>
                </div>
                <div className="auth-form__controls">
                    <button className="btn btn--nomal auth-form__controls-back"
                        onClick={()=>closeForm()}
                    >
                        TRỞ LẠI
                    </button>
                    <button type="submit" className="btn btn--primary">ĐĂNG KÝ</button>
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

export default RegisterForm
