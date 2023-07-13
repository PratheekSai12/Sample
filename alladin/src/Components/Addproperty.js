import React, {ChangeEvent, useState } from 'react';
import {useContext} from 'react';
import {UserContext} from '../App';
import {useNavigate} from 'react-router-dom';
import './Register.css';

function Addproperty(props) {
    const [filesData, setFilesData] = useState([]);
    var [property_name,setProperty_Name]= useState('');
    var [property_address,setProperty_Address]= useState('');
    var [property_type,setProperty_Type]= useState('');
    var [property_contact,setProperty_Contact]= useState('');
    var [noofrooms,setNoofRooms]= useState('');
    var [pics,setPics]=useState([]);
    // var totalfiles = document.getElementById('files').files.length;
    const{username}=useContext(UserContext);
    const{homestayId,setHomeStayId}=useContext(UserContext);
    let [noofroomsError,setNoofRoomsError]=useState('');
    let [property_nameError,setProperty_NameError]= useState('');
    let [property_addressError,setProperty_AddressError]= useState('');
    let [property_typeError,setProperty_TypeError]= useState('');
    let [property_contactError,setProperty_ContactError]= useState('');
    let [picsError,setPicsError]=useState('');

    const navigate = useNavigate();
    const FilesToByteArray = () =>{
        const [filesData,setFilesData]=useState([]);
    }
    
     var changeProperty_Name =(event)=>{
         setProperty_Name(event.target.value);
     }
     var changeProperty_Address =(event)=>{
        //console.log(event.target.value)
        setProperty_Address(event.target.value)
     }
     var changeProperty_Contact =(event)=>{
         setProperty_Contact(event.target.value);
     }
     var changeProperty_Type =(event)=>{
         setProperty_Type(event.target.value);
     }
     var changeNoofRooms =(event)=>{
         setNoofRooms(event.target.value);
     }
     var changeProperty_Type =(event)=>{
        setProperty_Type(event.target.value);
    }
    var changeNoofRooms =(event)=>{
        setNoofRooms(event.target.value);
    }
    const changePics=(event)=>{
        setPics(event.target.files);
    
    
        //setPics(Array.from(event.target.value));
        // const formData = new FormData();
        // for (let i = 0; i < pics.length; i++) {
        //     formData.append('file', pics[i]);
        //     console.log(formData)
        // } 
    }

    var registerproperty =async (event)=>{
        const fileReaders = [];
        // console.log(pics)
    for (let i = 0; i < pics.length; i++) {
      fileReaders[i] = new FileReader();

      fileReaders[i].onloadend = () => {
        setFilesData((prevFilesData) => [
          ...prevFilesData,
          new Uint8Array(fileReaders[i].result),
        ]);
      };

      fileReaders[i].readAsArrayBuffer(files[i]);
      console.log(fileReaders[i])
    }
        console.log(fileReaders)
        // if(!pics){
        //     return;
        // }
        // const reader = new FileReader();
        // const data = new FormData();
        // files.forEach((file, i) => {
            
        //     data.append(`file-${i}`, file);
        // });
        // const da=new FormData();
        // console.log(pics)
        event.preventDefault();
        // const formData = new FormData();
        // console.log(pics.length)
        // for(let i=0; i<pics.length; i++){
        //     formData.append('images[${i}]',pics[0])
        //     console.log(pics)
        // }
        var prop={
            Property_Name:property_name,
            Property_Address:property_address,
            Property_Type:property_type,
            Property_Contact:property_contact,
            NoofRooms:noofrooms,
            Pics:'null'
        };
        var response = await fetch('http://localhost:5293/api/HomeStay',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(prop),
            mode:'cors'
        })
        alert('Thanks for your registration our Team will get in touch soon')
        // .then((res) => res.json()) 
        // .then((data) => console.log(data))
        // .catch((err) => console.error(err));
        // var data1 = await response.json();
        // console.log(data1["username"]);
        // var hostId=await fetch('http://localhost:5293/api/HomeStay/GetHomeIdByUserName?username='+username);
        // const data2 = await hostId.json();
        // console.log(data2);
        // setHomeStayId(data2);
        // var render = new FileReader();
        // var fileByteArray=[];
        // render.readAsArrayBuffer(data);
        // render.onloadend=function(evt){
        //     if(evt.targt.readyState==FileReader.DONE){
        //         var arrayBuffer = evt.target.result,
        //         array=new Uint8Array(arrayBuffer);
        //         for(var i=0;i<array.length;i++){
        //             fileByteArray.push(array[i]);
        //         }
        //     }
        // }.then((res) => res.json()) 
        // .then((fileByteArray) => console.log(fileByteArray))
        // .catch((err) => console.error(err));
       
        
       
        navigate('/');

    }
    const checkProperty_Name=(event)=>{
        let P_NameVal = event.target.value;
        if(P_NameVal.length <1)
        {
            //alert('Password has to be minimum 3 chars long')
            event.target.value= '';
            setProperty_Name('');
            setProperty_NameError("PropertyName is required")
        }
        else{
            setProperty_NameError("");
            }
            
    }
        const checkProperty_Address=(event)=>{
            let P_AdressVal=event.target.value;
            if(P_AdressVal.length<1){
                event.target.value='';
                setProperty_Address('');
                setProperty_AddressError("Property Address is required");
            }
            else{
            setProperty_AddressError("");
            }
        }
        const checkProperty_Type=(event)=>{
            let P_TypeVal=event.target.value;
            if(P_TypeVal.length<1){
                event.target.value='';
                setProperty_Type('');
                setProperty_TypeError("Property Type is required");
            }
            else{
                setProperty_TypeError("");
                }
        }
        const checkProperty_Contact=(event)=>{
            let cnVal=event.target.value;
            if(cnVal.length<1){
                setProperty_ContactError("phone number is required");
            }
           if(cnVal.length!=10 ){
                //alert('username has to be minimum 5 chars long')
                
                setProperty_Contact('')
                setProperty_ContactError("invalid phone number")
            }
            /*if(cnVal.length>10){
                
                
                setCnError("invalid Phone Number")
            }*/
            else{
                setProperty_ContactError("");
                }
        }
        const checkNoofRooms=(event)=>{
            let roomsVal=event.target.value;
            if(roomsVal.length<1){
                event.target.value='';
                setNoofRooms('');
                setNoofRoomsError("This field is required")
            }
            else{
                setNoofRoomsError("");
            }
        }
        const checkPics=(event)=>{
            let picVal=event.target.value;
            if(picVal.length<1){
                event.target.value='';
                setPics('');
                setPicsError("This field is required")
            }
            else{
                setPicsError("");
            }
        }
        const files = pics ? [...pics] : [];
    return (
        <div className="custom-container1">
      <div className="inner-container1">
            <form className="d-flex flex-column" onSubmit={registerproperty}>
                
                <label className=''>Property Name: </label>
                <input className='form-control' onChange={changeProperty_Name} onBlur={checkProperty_Name} required type="text" placeholder='Enter Property Name'  />
                
                <div className="error">{property_nameError}</div>
                
                <label className=''>Property Address: </label>
                <input className='form-control' onChange={changeProperty_Address} onBlur={checkProperty_Address} required type="text" placeholder='Enter Property Address'  />
                
                <div className="error">{property_addressError}</div>
                Property Type:
                <select className='form-control' onChange={changeProperty_Type} required onBlur={checkProperty_Type}>
                    <option></option>
                    <option value="apartment">Apartment</option>
                    <option value="Entire">Entire House</option>
                    <option value="private room">Private Room</option>
                    <option value="shared room">Shared Room</option>
                </select>
                
                <div className="error">{property_typeError}</div>
                <label className=''>Property Contact: </label>
                <input className='form-control' onChange={changeProperty_Contact} onBlur={checkProperty_Contact} required type="text" placeholder='Enter Contact present in the Property'  />
                
                <div className="error">{property_contactError}</div>
                
                <label className=''>Number of Rooms: </label>
                <input className='form-control' onChange={changeNoofRooms} onBlur={checkNoofRooms} required type="text" placeholder='Enter Total number of rooms present'  />
                
                <div className="error">{noofroomsError}</div>
                
                {/* <label className=''>Property Photos : </label>
                <input className='form-control' type="file" required onChange={changePics} onBlur={checkPics} multiple />
                
                <div className="error">{picsError}</div><br/> */}
                
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
        </div>
    );
}

export default Addproperty;