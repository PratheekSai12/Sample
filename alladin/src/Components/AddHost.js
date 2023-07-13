import React, { useState } from 'react';


import {UserContext} from '../App';
import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import './Register.css';

 function AddHost(props) {
    var [un,setUn]= useState('');
    var [pass,setPass]= useState('');
    let [unError,setUnError]=useState('');
    let[p,setP]=useState('')
    const {username,setUsername} = useContext(UserContext);
    const navigate = useNavigate();
    var changeUn =(event)=>{
       //console.log(event.target.value)
       setUn(event.target.value)
    }
    var changePass =(event)=>{
        setPass(event.target.value);
    }
    var registerUser =async (event)=>{
        event.preventDefault();
        
        var user={
            username:un,
            password:pass,
            role:'host',
            status:'active'
        };
        console.log(user)
        var response = await fetch('http://localhost:5293/api/User/Register',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(user),
            mode:'cors'
        })
        .then(response=>{
            console.log(response);
            
            if(response.ok){
                setUsername(un);
                navigate('/Hsignup');
            }
            if(response.ok!=true){
                alert("Username already Exists");  
            }
 
            
        })
        .catch(error=>{
            console.log(error)
        })

    }
    const checkPass=(event)=>{
        let passVal = event.target.value;
        
        if(passVal.length <1)
        {
            //alert('Password has to be minimum 3 chars long')
            event.target.value= '';
            setPass('');
            setP("password is required")
        }
        if(passVal.length <5)
        {
            //alert('Password has to be minimum 3 chars long')
            event.target.value= '';
            setPass('');
            setP("password should have atleast 5 characters")
        }
        else{
            setP('')
        }
           
    }
    const checkUn=(event)=>{
        let unVal=event.target.value;
        if(unVal.length<1){
            setUnError("username required");
        }
        if(unVal.length<5  && unVal.length>0){
            //alert('username has to be minimum 5 chars long')
            
            event.target.value= '';
            setUn('');
            setUnError("UserName should have atleast 5 characters")
        }
    else{
        setP('')
    }
}
    return (
        // <div className='userdiv'>
        <div className="custom-container1"><br/><br/>
      <div className="inner-container1">
            <form className="d-flex flex-column" onSubmit={registerUser}>
                <h2>New User</h2><br/>
                <div class="form-group">
                <label className='form-log'><strong>Create Username</strong></label>
                <input className='form-control' onChange={changeUn} type="text" required name="userName" onBlur={checkUn} placeholder='Create Username'/>
                
                <div className="error">{unError}</div></div>
                <div class="form-group">
                <label className='form-log'><strong>Create Password</strong></label>
                <input className='form-control' type="password" onChange={changePass} required onBlur={checkPass} placeholder='Create Password'/>
                </div>
                <div className="error">{p}</div><br/>
                <button type='submit' className='btn btn-success'>Register</button>
            </form>
            
        </div>
        {/* </div>
        <div className='inner-container11'>
            <img src='https://img.freepik.com/free-vector/neighborhood-community-with-people-windows_107791-15457.jpg?w=1380&t=st=1675577785~exp=1675578385~hmac=8e87cad2beecb4173090e81256cbe145f7ce8ff0837ef85626f524e8816e5fb7' width={500}></img>
        </div> */}
    </div>
    );
}

export default AddHost;