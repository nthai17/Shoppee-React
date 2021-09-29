import React, { useContext } from "react";
import RegisterForm from "./RegisterForm.js";
import LoginForm from "./LoginForm.js"
import {HandleHeaderContext} from "../App.js"

function Modal({isOpen}){
    const {closeForm} = useContext(HandleHeaderContext)
    const renderForm = function(isOpen){
        if(isOpen.openLogin){
            return <LoginForm/>
        } else {
            return <RegisterForm/>     
        }
    }
    return(
        <div className="modal">
            <div className="modal__overlay" onClick={()=>closeForm()}></div>
            <div className="modal__body">
                {renderForm(isOpen)}
            </div>
        </div>
    )
}

export default Modal