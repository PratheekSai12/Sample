import React, { useState } from 'react';
import './Register.css';
import {UserContext} from '../App';
import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
function Login(props) {
    var [un,setUn]= useState('');
    var [pass,setPass]= useState('');
    var[token,setToken]=useState('');
    const {username,setUsername} = useContext(UserContext);
    const navigate = useNavigate();
    var changeUn =(event)=>{
       //console.log(event.target.value)
       setUn(event.target.value)
       setUsername(event.target.value);
    }
    var changePass =(event)=>{
        setPass(event.target.value);
    }
   
    var log =async (event)=>{
        event.preventDefault();
        
        var user={
            username:un,
            password:pass,
            role:'',
            status:'active'
            
        };
        console.log(user)
        var response = await fetch('http://localhost:5293/api/User/Login',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(user),
            mode:'cors'
        })
        
        .then(response=>{
            console.log(response);
            
            if(response.ok){
                alert("Login")
                console.log(un);
                navigate('/')
                
            }
            
            else if(response.ok!=true){
                alert("Wrong Username or password");
                // navigate('');
            }
 
        })
        .catch(error=>{
            console.log(error)
        })
             
    }
    const newUser=()=>{
        // navigate("/Register");
    }
    return (
        <div className="custom-container1">
        <div className="inner-container1">
            <form onSubmit={log} className="d-flex flex-column">
                {/* {token} */}
                <h2>Login</h2>
                <div class="form-group">
                <label className='form-log'><strong>Username :</strong> </label>
                <input class="form-control" id="username"  type="text" onChange={changeUn} placeholder='Enter Username'/>
                </div>
                <div class="form-group">
                <label className=''><strong>Password :</strong> </label>
                <input type="password" class="form-control" id="password" onChange={changePass} placeholder='Enter password'/>
                </div>
                <button type="submit" className='btn btn-success'>Sign-In</button><br/>
            
            <div class='user'>
            <div>
                new User ?
                <button class='newUser'><a  href='adduser' >Signup</a></button></div>
                <div>
                want to become a HOST :
                <button class='newUser'><a  href='addhost' >Signup</a></button></div>
            </div>
            </form>
      </div>
      {/* <div className='inner-container11'>
            <img src='https://img.freepik.com/free-vector/neighborhood-community-with-people-windows_107791-15457.jpg?w=1380&t=st=1675577785~exp=1675578385~hmac=8e87cad2beecb4173090e81256cbe145f7ce8ff0837ef85626f524e8816e5fb7' width={500}></img>
        </div> */}
    </div>
    );
}
export default Login;