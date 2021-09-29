import React, {useState} from "react";
import Header from "./Header/Header.js"
import Container from "./container/Container.js"
import Footer from "./footer/Footer.js"
import Modal from "./modal/Modal.js";


export const HandleHeaderContext = React.createContext()
function App(){
    const [isLogOut, setIsLogOut] = useState(false);
    const [isOpen, setIsOpen] = useState('')
    const handleLogOut = function(){
        setIsLogOut(true)
    }
    const openLoginForm = function(){
        setIsOpen({openLogin: true})
        console.log('hi');
    }
    const openRegisterForm = function(){
        setIsOpen({openLogin: false})
    }
    const closeForm = function(){
        setIsOpen('')
    }
    return (
        <React.Fragment>
            <HandleHeaderContext.Provider value={{handleLogOut, openLoginForm, openRegisterForm, closeForm, isLogOut}}>
                <Header/>
                {isOpen ? <Modal isOpen={isOpen}/> : null}
            </HandleHeaderContext.Provider>
            <Container/>
            <Footer/>
        </React.Fragment>
    )
}

export default App;
