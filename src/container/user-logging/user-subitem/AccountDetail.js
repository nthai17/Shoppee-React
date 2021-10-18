import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { HandleHeaderContext } from "../../../App";
import Validator from "../validator";
import validator from "./validator2";
function AccountDetail(){
    let {item} = useParams()
    const {UserLoggingInData, handleUpdateInfo} = useContext(HandleHeaderContext)
    switch (item) {
        case 'profile':
            return <Profile UserLoggingInData={UserLoggingInData} handleUpdateInfo={handleUpdateInfo}/>
        case 'payment':
            return <Payment/>
        case 'address':
            return <Address/>
        default:
            return <Password UserLoggingInData={UserLoggingInData} handleUpdateInfo={handleUpdateInfo}/>
    }
}
export default AccountDetail

function Profile({UserLoggingInData, handleUpdateInfo}){
    const [userPhone, setUserPhone] = useState(UserLoggingInData.phone)
    const [userShop, setUserShop] = useState(UserLoggingInData.shop)
    const [userAvatar, setUserAvatar] = useState(UserLoggingInData.avatar)
    const [userGender, setUserGender] = useState(UserLoggingInData.gender)
    const radioList = ["male", "female", "other"]
    
    const handleChangeGender = function(e){
        setUserGender(e.target.value)
    }
    const handleChangeShopName = function(e){
        setUserShop(e.target.value)
    }
    const handleChangePhone = function(e){
        setUserPhone(e.target.value)
    }
    const handleUpFile = function(e){
        e.preventDefault()
        let inputFile = e.target.nextSibling;
        inputFile.click()
        
    }
    const changeAvatar = function(e){
        // let reader = new FileReader();
        const file = e.target.files[0];
        // reader.readAsDataURL(file);
        // reader.addEventListener('load', (e) => {
        //     const url = e.target.result
        //     setUserAvatar(url);
        // });
        setUserAvatar(URL.createObjectURL(file))
    }
    useEffect(()=>{
        Validator({
            form: '#form-user-info',
            formGroup: '.form-input',
            errorSeclector: '.form-message',
            rules: [
            Validator.isRequired('#user-phone'),
            Validator.isRequired('#user-shop'),
            Validator.isRequired('input[name="gender"]'),
            ],
            onSubmit: function(data){
                data.file = userAvatar
                handleUpdateInfo(data, UserLoggingInData.id)
            }
        })
    })
    return (
        <React.Fragment>
            <header className="account__detait-header col c-12">
                <h3>Hồ sơ của tôi</h3>
                <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
            </header>
            <div className="account__detail-content">
                <form className="content-form" id="form-user-info">
                    <div className="form-info col c-8">
                        <table>
                            <tbody>
                                <tr className="form-row">
                                <td className="form-lable">Email</td>
                                <td className="form-input">
                                    <input type="email" name="email" readOnly value={UserLoggingInData.email}/>
                                </td>
                            </tr>
                            <tr className="form-row">
                                <td className="form-lable">Số điện thoại</td>
                                <td className="form-input">
                                    <input type="text" id="user-phone" name="phone" value={userPhone}
                                        onChange={(e)=>{handleChangePhone(e)}}
                                    />
                                    <span className="form-message"></span>
                                </td>
                            </tr>
                            <tr className="form-row">
                                <td className="form-lable">Tên Shop</td>
                                <td className="form-input">
                                    <input type="text" id="user-shop" name="shop" value={userShop}
                                        onChange={(e)=>{handleChangeShopName(e)}}
                                    />
                                    <span className="form-message"></span>
                                </td>
                            </tr>
                            <tr className="form-row">
                                <td className="form-lable">Giới tính</td>
                                <td className="form-input">
                                    {
                                        radioList.map((radio, index)=>{
                                            return (
                                                <React.Fragment key={index}>
                                                <label htmlFor={radio}>{radio==="male"?"Nam":radio==="female"?"Nữ":"Khác"}</label>
                                                <input type="radio" checked={radio===userGender} id={index} name="gender" value={radio}
                                                    onChange={(e)=>{handleChangeGender(e)}}
                                                /></React.Fragment>
                                            )
                                        })
                                    }
                                    <span className="form-message"></span>
                                </td>
                            </tr>
                            <tr className="form-row">
                                <td className="form-lable"></td>
                                <td className="form-input">
                                    <button type="submit" className="btn btn--primary">Lưu thay đổi</button>
                                    <span className="form-message submit-ms"></span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="form-avatar col c-4">
                        <img src={userAvatar} alt="hình ảnh"/>
                        <button id="up-avatar-btn" className="btn btn--primary"
                            onClick={(e)=>{handleUpFile(e)}}>Chọn ảnh</button>
                        <input onChange={(e)=>{changeAvatar(e)}} type="file" id="file-avatar" name="file"/>
                        <span>Dung lượng file tối đa 1MB</span>
                        <span>Định dạng: .JPEG, .PNG</span>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}
function Payment(){
    return(
        <header className="account__detait-header col c-12 account__header-has-button">
            <h3>Thẻ Tín Dụng/Ghi Nợ</h3>
            <button className="btn btn--primary add-cart-btn">+ Thêm thẻ mới</button>
        </header>
    )
}
function Address(){
    return(
        <header className="account__detait-header col c-12 account__header-has-button">
            <h3>Địa chỉ của tôi</h3>
            <button className="btn btn--primary add-cart-btn">+ Thêm địa chỉ mới</button>
        </header>
    )
}
function Password({UserLoggingInData, handleUpdateInfo}){
    const currentPassword = UserLoggingInData.password
    const [userPassword, setUserPassword] = useState('')
    const [newUserPassword, setNewUserPassword] = useState('')
    const [reNewUserPassword, setReNewUserPassword] = useState('')
    useEffect(()=>{
        const form = new validator("#form-change-password")
        form.onSubmit = function(data){
            if(data.password === currentPassword){
                const newPassUpdate = {password: data.newpassword}
                handleUpdateInfo(newPassUpdate, UserLoggingInData.id)
                setUserPassword('')
                setNewUserPassword('')
                setReNewUserPassword('')
            } else {
                document.querySelector('.submit-ms').innerText = 'Mật khẩu hiện tại không đúng!'
                document.querySelector('.submit-ms').classList.add('failed')
                setUserPassword('')
                setNewUserPassword('')
                setReNewUserPassword('')
            }
        }
    },[currentPassword, UserLoggingInData, handleUpdateInfo])
    return(
        <React.Fragment>
            <header className="account__detait-header col c-12">
                <h3>Đổi Mật Khẩu</h3>
                <p>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</p>
            </header>
            <div className="account__detail-content">
                <form className="content-form" id="form-change-password">
                    <div className="form-info col c-10">
                        <table>
                            <tbody>
                            <tr className="form-row">
                                <td className="form-lable">Mật Khẩu Hiện Tại</td>
                                <td className="form-input input-change-passwork">
                                    <input type="password" name="password" rules="required|min:6" value={userPassword}
                                        onChange={(e)=>{setUserPassword(e.target.value)}}
                                    />
                                    <span className="form-message"></span>
                                </td>
                            </tr>
                            <tr className="form-row">
                                <td className="form-lable">Mật khẩu mới</td>
                                <td className="form-input input-change-passwork">
                                    <input type="password" name="newpassword" rules="required|min:6" value={newUserPassword}
                                        onChange={(e)=>{setNewUserPassword(e.target.value)}}
                                    />
                                    <span className="form-message"></span>
                                </td>
                            </tr>
                            <tr className="form-row">
                                <td className="form-lable">Xác nhận mật khẩu</td>
                                <td className="form-input input-change-passwork">
                                    <input type="password" name="repassword" rules="required|confirm" value={reNewUserPassword}
                                        onChange={(e)=>{setReNewUserPassword(e.target.value)}}
                                    />
                                    <span className="form-message"></span>
                                </td>
                            </tr>
                            <tr className="form-row">
                                <td className="form-lable"></td>
                                <td className="form-input">
                                    <button type="submit" className="btn btn--primary">Xác nhận</button>
                                    <span className="form-message submit-ms"></span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}