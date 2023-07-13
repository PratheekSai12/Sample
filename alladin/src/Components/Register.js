import React, { useState } from 'react';
import {useContext} from 'react';
import {UserContext} from '../App';
import app from "./firebase";
import 'firebase/auth';
import { getAuth, RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";
import {useNavigate} from 'react-router-dom';
import './Register.css';

const auth = getAuth(app);
function Register(props) {
    var [email,setEmail]= useState('');
    var [name,setName]= useState('');
    var [gender,setGender]= useState('');
    var [dob,setDob]= useState('');
    var [cn,setCn]= useState('');
    var [otp,setOtp]=useState('');
    
    const{username}=useContext(UserContext);
    const{customerId,setCustomerId}=useContext(UserContext);
    let [emailError,setEmailError]=useState('');
    let [nameError,setNameError]= useState('');
    let [genderError,setGenderError]= useState('');
    let [dobError,setDobError]= useState('');
    let [cnError,setCnError]= useState('');
    // const{register,errors}=useForm();

    const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);

    const auth=getAuth(app);
     var onCapchVerify=(event)=>{
        
        window.recaptchaVerifier = new RecaptchaVerifier("recaptcha-container", {
        'size': 'invisible',
        'callback': (response) => {
            this.onSignInSubmit();
        },
        'expired-callback': () => {
        }
        }, auth);
    }
    var onSignInSubmit=(event)=>{
        onCapchVerify();
        const phoneNumber = "+91"+ cn;
        const appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        
        
        alert("otp sent");
        // setState({verifyotp:true});
        
    }).catch((error) => {
      
    });
    }
    // var verifyCode=(event)=>{
    //     console.log(window.confirmationResult);
    //     console.log(otp);
    //     console.log( window.confirmationResult
    //         .confirm(otp));
    //     window.confirmationResult.confirm(state.otp).then((result) => {

    //         // User signed in successfully.
    //         const user = result.user;
    //         console.log(user);
    //         alert("done")
    //         // ...
    //       }).catch((error) => {
    //         alert("invalid")
    //         // User couldn't sign in (bad verification code?)
    //         // ...
    //       });
    // }

      
      const verifyCode = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
          const user = await window.confirmationResult.confirm(otp);
          console.log(user);
          alert("Succesful")
        } catch (error) {
          setError(error.message);
          alert("Invalid")
        }
        setLoading(false);
      };
      
      
      
      
      


    const navigate = useNavigate();
    
     var changeEmail =(event)=>{
         setEmail(event.target.value);
     }
     var changeName =(event)=>{
        //console.log(event.target.value)
        setName(event.target.value)
     }
     var changeotp =(event)=>{
        setOtp(event.target.value)
     }
     var changeGender =(event)=>{
         setGender(event.target.value);
     }
     var changeDob =(event)=>{
         setDob(event.target.value);
     }
     var changeCn =(event)=>{
         setCn(event.target.value);
     }
    var registerCustomer =async (event)=>{
        event.preventDefault();
        var customer={
            username:username,
            Name:name,
            Gender:gender,
            DateOfBirth:dob,
            Email:email,
            ProfilePic:'null',
            ContactNumber:cn
        };
        console.log(customer)
        var response = await fetch('http://localhost:5293/api/Customer',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(customer),
            mode:'cors'
        });
        // var data = await response.json();
        // console.log(data["username"]);
        // var customerId=await fetch('http://localhost:5293/api/Customer/GetCustomerIdByUserName?username='+username);
        // const data1 = await customerId.json();
        // console.log(data1);
        // setCustomerId(data1);
       navigate('/');

    }
    const checkGender=(event)=>{
        let genderVal = event.target.value;
        if(genderVal.length <1)
        {
            //alert('Password has to be minimum 3 chars long')
            event.target.value= '';
            setGender('');
            setGenderError("gender is required")
        }
        else{
            setGenderError("");
            }
            
    }
        const checkName=(event)=>{
            let nVal=event.target.value;
            if(nVal.length<1){
                event.target.value='';
                setName('');
                setNameError("name is required");
            }
            else{
            setNameError("");
            }
        }
        const checkEmail=(event)=>{
            let eVal=event.target.value;
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
            if(eVal.length<1){
                event.target.value='';
                setEmail('');
                setEmailError("email is required");
            }
            if (!regex.test(eVal))
            {
                event.target.value= '';
                setEmail('');
                setEmailError("email not valid")   
            }
            else{
                setEmailError("");
                }
        }
        const checkCn=(event)=>{
            let cnVal=event.target.value;
            if(cnVal.length<1){
                setCnError("phone number is required");
            }
           if(cnVal.length!=10 ){
                //alert('username has to be minimum 5 chars long')
                
                setCn('')
                setCnError("invalid phone number")
            }
            /*if(cnVal.length>10){
                
                
                setCnError("invalid Phone Number")
            }*/
            else{
                setCnError("");
                }
        }
        const checkDOB=(event)=>{
            let dVal=event.target.value;
            if(dVal.length<1){
                event.target.value='';
                setDob('');
                setDobError("date of birth is required")
        }
       else{
        setDobError("");
        }
    }
    return (
        <div className="custom-container1">
      <div className="inner-container1">
        <h1>Welcome {username}</h1>
            <form className="d-flex flex-column" >
            <div id="recaptcha-container"></div>
                {/* <strong>UserName:{username}</strong> */}
                <label className='form-log'>Name:</label>
                <input className='form-control' onChange={changeName} onBlur={checkName} required type="text" placeholder='Enter FullName'  />
                <div className="error">{nameError}</div>
                Gender:
                <select className='form-control' onChange={changeGender} required onBlur={checkGender}>
                    <option></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="No prefer to say">Not prefer to say</option>
                </select>
                <div className="error">{genderError}</div>
                <label className='form-log'>Date Of Birth: </label>
                <input className='form-control' onChange={changeDob} required type="Date" onBlur={checkDOB}/>
                <div className="error">{dobError}</div>
                <label className='form-log'>Mobile: </label>
                <input className='form-control' onChange={changeCn} onBlur={checkCn} required type="text" placeholder='Enter Mobile Number'/>
                <button className='btn btn-success' onClick={onSignInSubmit}>send OTP</button>
                <div className="error">{cnError}</div>
                <label className='form-log'>OTP: </label>
                <input className='form-control' onChange={changeotp} id='otp' name='otp' type="number" placeholder='Enter the OTP'/>
                <button className='btn btn-success' onClick={verifyCode} >verify</button>
                <label className='form-log'>Email: </label>
                <input className='form-control' onChange={changeEmail} required onBlur={checkEmail} type="text" placeholder='Enter EmailId'/>
                <div className="error">{emailError}</div>
                {/* <label className='form-log'>Address: </label>
                <input className='form-control' onChange={changeAddress} required onBlur={checkAddress} type="text" placeholder='Enter Present Address'/>
                <div className="error">{addressError}</div>
                <label className='form-log'>State: </label>
                <input className='form-control' onChange={changeState} required onBlur={checkState} type="text" placeholder='Enter State'/>
                <div className="error">{stateError}</div>
                <label className='form-log'>Country: </label>
                <input className='form-control' onChange={changeCountry} required onBlur={checkCountry}  type="text" placeholder='Enter Country'/>
                <div className="error">{countryError}</div> */}
                
                {/* <div id='recaptcha-container'></div> */}

                <button className='btn btn-success' onClick={registerCustomer}>Submit</button>
            </form>
        </div>
        {/* <div className='inner-container11'>
            <img src='https://images.pexels.com/photos/1888403/pexels-photo-1888403.jpeg' width={500}></img>
        </div> */}
        </div>
    );
}
export default Register;