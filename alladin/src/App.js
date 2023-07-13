
import './App.css';
import React,{ useLayoutEffect, useRef } from 'react';
import { createContext, useState, Provider } from 'react';
import Interface from './Components/Interface';
import Login from './Components/Login';
import Register from './Components/Register';
import HRegister from './Components/HRegister';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import AddHost from './Components/AddHost';
import AddUser from './Components/AddUser';
import Questionary from './Components/Questionary';
import Addproperty from './Components/Addproperty';
import Dummy from './Components/Dummy';
import Interface2 from './Components/Interface2';
import Profile from './Components/Profile';

export const UserContext = React.createContext();

function App() {
  const [username,setUsername]=useState(" ")

  const provideUsername=(event)=>{
    setUsername(event)
  }

  const stickyHeader = useRef()
  useLayoutEffect(() => {
    const mainHeader = document.getElementById('mainHeader')
    let fixedTop = stickyHeader.current.offsetTop
    const fixedHeader = () => {
      if (window.pageYOffset > fixedTop) {
        mainHeader.classList.add('fixedTop')
      } else {
        mainHeader.classList.remove('fixedTop')
      }
    }
    window.addEventListener('scroll', fixedHeader)
  }, [])

  
  return (
    
    <div className="App">
      <div className="mainHeader" id="mainHeader" ref={stickyHeader}>
      <h1 className='two'>
        <img src='https://i.ibb.co/GJ8PGBT/aladin-logo.png' width='60' height='70'/>
         Aaladin</h1>
      </div>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
</style>
    <Router>
    <UserContext.Provider value={{username,setUsername}}>
      <Routes>
      <Route exact path="/" element={<Interface/>}></Route>
      <Route exact path="/login" element={<Login/>}></Route>
      <Route exact path="/adduser" element={<AddUser/>}></Route>
      <Route exact path="/addhost" element={<AddHost/>}></Route>
      <Route exact path="/signup" element={<Register/>}></Route>
      <Route exact path="/Hsignup" element={<HRegister/>}></Route>
      <Route exact path="/questions" element={<Questionary/>}></Route>
      <Route exact path="/addproperty" element={<Addproperty/>}></Route>
      <Route exact path="/interface2" element={<Interface2/>}></Route>
      <Route exact path='/profile' element={<Profile/>}/>
      <Route exact path='/dummy' element={<Dummy/>}/>
      </Routes>
    </UserContext.Provider>
    </Router>
    
    </div>


  );
}

export default App;