import React, {useState, useEffect} from "react";
import Header from "./Header/Header.js"
import Container from "./container/Container.js"
import Footer from "./footer/Footer.js"
import Modal from "./modal/Modal.js";


export const HandleHeaderContext = React.createContext()

function App(){
    const [isLogOut, setIsLogOut] = useState(false);
    const [isOpen, setIsOpen] = useState('')
    const [listUsers, setListUser] = useState([])
    const [UserLoggingInData, setUserLoggingInData] = useState({})
    const handleLogOut = function(){
        setIsLogOut(false)
    }
    const openLoginForm = function(){
        setIsOpen({openLogin: true})
    }
    const openRegisterForm = function(){
        setIsOpen({openLogin: false})
    }
    const closeForm = function(){
        setIsOpen('')
    }
    const showUserLoggingIn = function(userData){
        setUserLoggingInData(userData);
        setIsLogOut(true)
    }
    const getDataUser = ()=>{
        fetch('http://localhost:8000/listUsers')
            .then(res=>res.json())
            .then(data=>setListUser(data))
    }
    const handleAddUser = function(userData){
        fetch('http://localhost:8000/listUsers', {
                method: 'POST',
                body: JSON.stringify({
                    email: userData.email,
                    password: userData.password,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            .then(res=>res.json())
            .then(
                getDataUser
                )
    }
    useEffect(()=>{
        (async ()=>{
            await new Promise(getDataUser)
        })()
    }, [])
    return (
        <React.Fragment>
            <HandleHeaderContext.Provider value={{handleLogOut, openLoginForm, openRegisterForm, closeForm, showUserLoggingIn, handleAddUser, isLogOut, listUsers, UserLoggingInData}}>
                <Header/>
                {isOpen ? <Modal isOpen={isOpen}/> : null}
            </HandleHeaderContext.Provider>
            <Container/>
            <Footer/>
        </React.Fragment>
    )
}

export default App;
