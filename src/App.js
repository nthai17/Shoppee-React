import React, {useState, useEffect} from "react";
import {BrowserRouter} from "react-router-dom"
import Header from "./Header/Header.js"
import Container from "./container/Container.js"
import Footer from "./footer/Footer.js"
import Modal from "./modal/Modal.js";


export const HandleHeaderContext = React.createContext()
export const HandleContainerContext = React.createContext()
function App(){
    const storageLog = JSON.parse(localStorage.getItem('logging'))
    const [isLogOut, setIsLogOut] = useState(storageLog ?? false);
    const [isOpen, setIsOpen] = useState('')
    const [listUsers, setListUser] = useState([])
    const storageUser = JSON.parse(localStorage.getItem('user'))
    const [UserLoggingInData, setUserLoggingInData] = useState(storageUser ?? {})
    const handleLogOut = function(){
        setIsLogOut(()=>{
            const log = false
            localStorage.setItem('logging', JSON.stringify(log))
            return log
        })
        setUserLoggingInData({})
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
    const updateUserStorage = function(userData){
        const userLogging = userData
        const userJson = JSON.stringify(userLogging)
        localStorage.setItem('user', userJson)
        return userLogging
    }
    const showUserLoggingIn = function(userData){
        setUserLoggingInData(updateUserStorage(userData));
        setIsLogOut(()=>{
            const log = true
            localStorage.setItem('logging', JSON.stringify(log))
            return log
        })
    }
    const getDataUser = ()=>{
        fetch('https://615ab7ed4a360f0017a81226.mockapi.io/listUsers')
            .then(res=>res.json())
            .then(data=>setListUser(data))
    }
    const handleAddUser = function(userData){
        fetch('https://615ab7ed4a360f0017a81226.mockapi.io/listUsers', {
                method: 'POST',
                body: JSON.stringify({
                    email: userData.email,
                    password: userData.password,
                    avatar: 'https://anhdep123.com/wp-content/uploads/2021/05/avatar-den-trang.jpg'
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
    const handleUpdateInfo = function(userData, id){
        fetch(`https://615ab7ed4a360f0017a81226.mockapi.io/listUsers/${id}`, {
                method: 'PUT',
                body: JSON.stringify(userData),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
        })
        .then(res=>res.json())
        .then(newData=>{
            setUserLoggingInData(updateUserStorage(newData));
            getDataUser()
            document.querySelector('.submit-ms').classList.add('success')
            document.querySelector('.submit-ms').innerText = 'Ch???nh s???a th??nh c??ng!'
        })
    }
    useEffect(()=>{
        (async ()=>{
            await new Promise(getDataUser)
        })()
    }, [])
    return (
        <BrowserRouter>
        <React.Fragment>
            <HandleHeaderContext.Provider 
            value={{
                handleLogOut, openLoginForm, openRegisterForm, closeForm, showUserLoggingIn, handleAddUser, handleUpdateInfo, 
                isLogOut, listUsers, UserLoggingInData
                }}
            >
                <Header/>
                {isOpen ? <Modal isOpen={isOpen}/> : null}
                <Container/>
            </HandleHeaderContext.Provider>
            <Footer/>
        </React.Fragment>
        </BrowserRouter>
    )
}

export default App;
