import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { HandleHeaderContext } from "../../../App";
import Validator from "../validator";
function AccountDetail(){
    let {item} = useParams()
    switch (item) {
        case 'profile':
            return <Profile/>
        case 'payment':
            return <Payment/>
        case 'address':
            return <Address/>
        default:
            return <Password/>
    }
}
export default AccountDetail

function Profile(){
    const {UserLoggingInData, handleUpdateInfo} = useContext(HandleHeaderContext)
    const [userPhone, setUserPhone] = useState(UserLoggingInData.phone)
    const [userShop, setUserShop] = useState(UserLoggingInData.shop)
    const [userAvatar, setUserAvatar] = useState(UserLoggingInData.avatar)
    const [userGender, setUserGender] = useState(UserLoggingInData.gender)
    let female, male, other
    switch (userGender){
        case "male":
            male = true
            break
        case "other":
            other = true
            break
        default:
            female =true
    }
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
                                    <label htmlFor="male">Nam</label>
                                    <input type="radio" checked={male} id="male" name="gender" value="male"
                                        onChange={(e)=>{handleChangeGender(e)}}
                                    />
                                    <label htmlFor="female">Nữ</label>
                                    <input type="radio" checked={female} id="female" name="gender" value="female"
                                        onChange={(e)=>{handleChangeGender(e)}}
                                    />
                                    <label htmlFor="other">Khác</label>
                                    <input type="radio" checked={other} id="other" name="gender" value="other"
                                        onChange={(e)=>{handleChangeGender(e)}}
                                    />
                                    <span className="form-message"></span>
                                </td>
                            </tr>
                            <tr className="form-row">
                                <td className="form-lable"></td>
                                <td className="form-input">
                                    <button type="submit" id="submit-userform-btn" className="btn">Lưu thay đổi</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="form-avatar col c-4">
                        <img src={userAvatar} alt="hình ảnh"/>
                        <button id="up-avatar-btn" className="btn"
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
        <div>Payment</div>
    )
}
function Address(){
    return(
        <div>Address</div>
    )
}
function Password(){
    return(
        <div>Password</div>
    )
}