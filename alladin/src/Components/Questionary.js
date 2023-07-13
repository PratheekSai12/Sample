import React, { useState } from 'react';
import {useContext} from 'react';
import {UserContext} from '../App';
import {useNavigate} from 'react-router-dom';
import './Register.css';
function Questionary(props) {
    var [about,setAbout]= useState('');
    var [passionate,setPassionate]= useState('');
    var [hobbies,setHobbies]= useState('');
    var [accomplishment,setAccomplishment]= useState('');
    var [life,setLife]= useState('');
    var [personal_expertise,setPersonal_Expertise]= useState('');
    var [professional_expertise,setProfessional_Expertise]= useState('');
    var [whats_life,setWhats_Life]= useState('');
    var [travel,setTravel]= useState('');
    var [offer,setOffer]= useState('');
    var [kindof_guests,setKindof_Guests]= useState('');
    var [greatest_impact,setGreatest_Impact]= useState('');
    var [cherished_memories,setCherished_Memories]= useState('');
    var [pictures,setPictures]= useState('');
    var [journer_destination,setJourner_Destination]= useState('');
    
    const [toggleState, setToggleState] = useState(1);
    const{username}=useContext(UserContext);
    const{questionaryId,setQuestionaryId}=useContext(UserContext);
    let [aboutError,setAboutError]=useState('');
    let [passionateError,setPassionateError]= useState('');
    let [hobbiesError,setHobbiesError]= useState('');
    let [accomplishmentError,setAccomplishmentError]= useState('');
    let [lifeError,setLifeError]= useState('');
    let [personal_expertiseError,setPersonal_ExpertiseError]= useState('');
    let [professional_expertiseError,setProfessional_ExpertiseError]= useState('');
    let [whats_lifeError,setWhats_LifeError]= useState('');
    let [travelError,setTravelError]= useState('');
    let [offerError,setOfferError]=useState('');
    let [kindof_guestsError,setKindof_GuestsError]= useState('');
    let [greatest_impactError,setGreatest_ImpactError]= useState('');
    let [cherished_memoriesError,setCherished_MemoriesError]= useState('');
    let [picturesError,setPicturesError]= useState('');
    let [journer_destinationError,setJourner_DestinationError]= useState('');
    
    const navigate = useNavigate();
    const toggleTab = (index) => {
        setToggleState(index);
      };


    var i=1;
    var next=(event)=>{
        i+=1
        toggleTab(i)
        console.log(i)
    }
    var prev=(event)=>{
        i-=1;
        if (i>0)(toggleTab(i));
        else i=1;
        console.log(i)
    }


     var changeAbout =(event)=>{
         setAbout(event.target.value);
     }
     var changePassionate =(event)=>{
        setPassionate(event.target.value)
     }
     var changeHobbies =(event)=>{
         setHobbies(event.target.value);
     }
     var changeAccomplishment =(event)=>{
         setAccomplishment(event.target.value);
     }
     var changeLife =(event)=>{
        setLife(event.target.value)
     }
     var changePersonal_Expertise =(event)=>{
         setPersonal_Expertise(event.target.value);
     }
     var changeProfessional_Expertise =(event)=>{
        setProfessional_Expertise(event.target.value);
    }
    var changeWhats_Life =(event)=>{
       setWhats_Life(event.target.value)
    }
    var changeTravel =(event)=>{
        setTravel(event.target.value);
    }
    var changeOffer =(event)=>{
         setOffer(event.target.value);
     }
     var changeKindof_Guests =(event)=>{
        setKindof_Guests(event.target.value)
     }
     var changeGreatest_Impact =(event)=>{
         setGreatest_Impact(event.target.value);
     }
     var changeCherished_Memories =(event)=>{
        setCherished_Memories(event.target.value);
    }
    var changePictures =(event)=>{
       setPictures(event.target.value)
    }
    var changeJourner_Destination =(event)=>{
        setJourner_Destination(event.target.value);
    }
    var registerCustomer =async (event)=>{
        event.preventDefault();
        var ques={
            About:about,
            Passionate:passionate,
            Hobbies:hobbies,
            Accomplishment:accomplishment,
            Life:life,
            Personal_Expertise:personal_expertise,
            Professional_Expertise:professional_expertise,
            Whats_Life:whats_life,
            Travel:travel,
            Offer:offer,
            Kindof_Guests:kindof_guests,
            Greatest_Impact:greatest_impact,
            Cherished_Memories:cherished_memories,
            Pictures:pictures,
            Journer_Destination:journer_destination
        };
        console.log(ques)
        var response = await fetch('http://localhost:5293/api/Questionary',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(ques),
            mode:'cors'
        });
        // var data = await response.json();
        // console.log(data["username"]);
        // var customerId=await fetch('http://localhost:5293/api/Questionary/GetQuestionaryIdByUserName?username='+username);
        // const data1 = await customerId.json();
        // console.log(data1);
        // setQuestionaryId(data1);
       
       navigate('/interface2');

    }
    const checkAbout=(event)=>{
        let aboutVal = event.target.value;
        if(aboutVal.length <1)
        {
            //alert('Password has to be minimum 3 chars long')
            event.target.value= '';
            setAbout('');
            setAboutError("This field can't be empty")
        }
        else{
            setAboutError("");
        }
    }
    const checkPassionate=(event)=>{
        let passionateVal=event.target.value;
        if(passionateVal.length<1){
            event.target.value='';
            setPassionate('');
            setPassionateError("This field can't be empty");
        }
        else{
        setPassionateError("");
        }
    }
    const checkHobbies=(event)=>{
        let hobbiesVal=event.target.value;
        if(hobbiesVal.length<1){
            event.target.value='';
            setHobbies('');
            setHobbiesError("This field can't be empty")
        }
        else{
            setHobbiesError("");
        }
    }
    const checkAccomplishment=(event)=>{
        let accomplishmentVal=event.target.value;
        if(accomplishmentVal.length<1){
            event.target.value='';
            setAccomplishment('');
            setAccomplishmentError("This field can't be empty")
        }
        else{
            setAccomplishmentError("");
        }
    }
    const checkLife=(event)=>{
        let lifeVal=event.target.value;
        if(lifeVal.length<1){
            event.target.value='';
            setLife('');
            setLifeError("This field can't be empty")
        }
        else{
            setLifeError("");
        }
    }
    const checkPersonal_Expertise=(event)=>{
        let personal_expertiseVal=event.target.value;
        if(personal_expertiseVal.length<1){
            event.target.value='';
            setPersonal_Expertise('');
            setPersonal_ExpertiseError("This field can't be empty")
        }
        else{
            setPersonal_ExpertiseError("");
        }
    }
    const checkProfessional_Expertise=(event)=>{
        let professional_expertiseVal=event.target.value;
        if(professional_expertiseVal.length<1){
            event.target.value='';
            setProfessional_Expertise('');
            setProfessional_ExpertiseError("This field can't be empty")
        }
        else{
            setProfessional_ExpertiseError("");
        }
    }
    const checkWhats_Life=(event)=>{
        let whats_lifeVal = event.target.value;
        if(whats_lifeVal.length <1)
        {
            event.target.value= '';
            setWhats_Life('');
            setWhats_LifeError("This field can't be empty")
        }
        else{
            setWhats_LifeError("");
        }
    }
    const checkTravel=(event)=>{
        let travelVal=event.target.value;
        if(travelVal.length<1){
            event.target.value='';
            setTravel('');
            setTravelError("This field can't be empty");
        }
        else{
        setTravelError("");
        }
    }
    const checkOffer=(event)=>{
        let offerVal=event.target.value;
        if(offerVal.length<1){
            event.target.value='';
            setOffer('');
            setOfferError("This field can't be empty")
        }
        else{
            setOfferError("");
        }
    }
    const checkKindof_Guests=(event)=>{
        let kindof_guestsVal=event.target.value;
        if(kindof_guestsVal.length<1){
            event.target.value='';
            setKindof_Guests('');
            setKindof_GuestsError("This field can't be empty")
        }
        else{
            setKindof_GuestsError("");
        }
    }
    const checkGreatest_Impact=(event)=>{
        let greatest_impactVal=event.target.value;
        if(greatest_impactVal.length<1){
            event.target.value='';
            setGreatest_Impact('');
            setGreatest_ImpactError("This field can't be empty")
        }
        else{
            setGreatest_ImpactError("");
        }
    }
    const checkCherished_Memories=(event)=>{
        let cherished_memoriesVal=event.target.value;
        if(cherished_memoriesVal.length<1){
            event.target.value='';
            setCherished_Memories('');
            setCherished_MemoriesError("This field can't be empty")
        }
        else{
            setCherished_MemoriesError("");
        }
    }
    const checkPictures=(event)=>{
        let picturesVal=event.target.value;
        if(picturesVal.length<1){
            event.target.value='';
            setPictures('');
            setPicturesError("This field can't be empty")
        }
        else{
            setPicturesError("");
        }
    }
    const checkJourner_Destination=(event)=>{
        let journer_destinationVal=event.target.value;
        if(journer_destinationVal.length<1){
            event.target.value='';
            setJourner_Destination('');
            setJourner_DestinationError("This field can't be empty")
        }
        else{
            setJourner_DestinationError("");
        }
    }


    return (
        <div className="container">
            <div className="content-tabs">
                <div className={toggleState === 1 ? "content  active-content" : "content"}>
                    <form className="d-flex flex-column" onSubmit={registerCustomer}>
                    <br/>
                        <label className=''>About you : </label><br/>
                        <textarea className='form-control' onChange={changeAbout} onBlur={checkAbout} required type="text" rows={3}  placeholder='Describe yourself'  />
                        <br/>
                        <div className="error">{aboutError}</div>
                    </form>
                    <button className='tabs' onClick={() => toggleTab(2)}>Next ➟</button>
                </div>
                <div className={toggleState === 2 ? "content  active-content" : "content"}>
                    
                    <form className="d-flex flex-column" onSubmit={registerCustomer}>
                        <br/>
                        <label className=''>Passionate about : </label><br/>
                        <textarea className='form-control' rows={3} onChange={changePassionate} required type="text" onBlur={checkPassionate}  placeholder='Describe the things that Aspire you.'/>
                        <br/>
                        <div className="error">{passionateError}</div>
                    </form>
                    <button className="tabs" onClick={() => toggleTab(1)} >Prev</button>  <button className="tabs1" onClick={() => toggleTab(3)}>Next ➟</button>
                </div>
                <div className={toggleState === 3 ? "content  active-content" : "content"}>
                    
                    <form className="d-flex flex-column" onSubmit={registerCustomer}>
                    <br/>
                        <label className=''>Hobbies : </label><br/>
                        <textarea className='form-control' rows={3} onChange={changeHobbies} onBlur={checkHobbies} required type="text" placeholder='which activities gives immense pleasure for you'/>
                        <br/>
                        <div className="error">{hobbiesError}</div>
                    </form>
                    <button className="tabs" onClick={() => toggleTab(2)} >Prev</button>  <button className="tabs1" onClick={() => toggleTab(4)}>Next ➟</button>
                </div>
                <div className={toggleState === 4 ? "content  active-content" : "content"}>
                    
                    <form className="d-flex flex-column" onSubmit={registerCustomer}>
                    <br/>
                        <label className=''>Greatest accomplishment in your life?  </label><br/>
                        <textarea className='form-control' rows={3} onChange={changeAccomplishment} required onBlur={checkAccomplishment} type="text" placeholder=''/>
                        <br/>
                        <div className="error">{accomplishmentError}</div>
                    </form>
                    <button className="tabs" onClick={() => toggleTab(3)} >Prev</button>  <button className="tabs1" onClick={() => toggleTab(5)}>Next ➟</button>
                </div>
                <div className={toggleState === 5 ? "content  active-content" : "content"}>
                    
                    <form className="d-flex flex-column" onSubmit={registerCustomer}>
                    <br/>
                        <label className=''>One word that defines your life?  </label><br/>
                        <textarea className='form-control' rows={3} onChange={changeLife} required onBlur={checkLife} type="text" placeholder=''/>
                        <br/>
                        <div className="error">{lifeError}</div>
                    </form>
                    <button className="tabs" onClick={() => toggleTab(4)} >Prev</button>  <button className="tabs1" onClick={() => toggleTab(6)}>Next ➟</button>
                </div>
                <div className={toggleState === 6 ? "content  active-content" : "content"}>
                    
                    <form className="d-flex flex-column" onSubmit={registerCustomer}>
                    <br/>
                        <label className=''>You personally expertise in?  </label><br/>
                        <textarea className='form-control' rows={3} onChange={changePersonal_Expertise} required onBlur={checkPersonal_Expertise} type="text" placeholder=''/>
                        <br/>
                        <div className="error">{personal_expertiseError}</div>
                    </form>
                    <button className="tabs" onClick={() => toggleTab(5)} >Prev</button>  <button className="tabs1" onClick={() => toggleTab(7)}>Next ➟</button>
                </div>
                <div className={toggleState === 7 ? "content  active-content" : "content"}>
                    
                    <form className="d-flex flex-column" onSubmit={registerCustomer}>
                    <br/>
                        <label className=''>You professionally expertise in?  </label><br/>
                        <textarea className='form-control' rows={3} onChange={changeProfessional_Expertise} required onBlur={checkProfessional_Expertise} type="text" placeholder=''/>
                        <br/>
                        <div className="error">{professional_expertiseError}</div>
                    </form>
                    <button className="tabs" onClick={() => toggleTab(6)} >Prev</button>  <button className="tabs1" onClick={() => toggleTab(8)}>Next ➟</button>
                </div>
                <div className={toggleState === 8 ? "content  active-content" : "content"}>
                    
                    <form className="d-flex flex-column" onSubmit={registerCustomer}>
                    <br/>
                        <label className=''>Life according to you?  </label><br/>
                        <textarea className='form-control' rows={3} onChange={changeWhats_Life} required onBlur={checkWhats_Life} type="text" placeholder=''/>
                        <br/>
                        <div className="error">{whats_lifeError}</div>
                    </form>
                    <button className="tabs" onClick={() => toggleTab(7)} >Prev</button>  <button className="tabs1" onClick={() => toggleTab(9)}>Next ➟</button>
                </div>
                <div className={toggleState === 9 ? "content  active-content" : "content"}>
                    
                    <form className="d-flex flex-column" onSubmit={registerCustomer}>
                    <br/>
                        <label className=''>Travel according to you? </label><br/>
                        <textarea className='form-control' rows={3} onChange={changeTravel} onBlur={checkTravel} required type="text" placeholder=''  />
                        <br/>
                        <div className="error">{travelError}</div>
                    </form>
                    <button className="tabs" onClick={() => toggleTab(8)} >Prev</button>  <button className="tabs1" onClick={() => toggleTab(10)}>Next ➟</button>
                </div>
                <div className={toggleState === 10 ? "content  active-content" : "content"}>
                    
                    <form className="d-flex flex-column" onSubmit={registerCustomer}>
                    <br/>
                        <label className=''>What can I offer on my stay?  </label><br/>
                        <textarea className='form-control' rows={3} onChange={changeOffer} required type="text" onBlur={checkOffer} placeholder=''/>
                        <br/>
                        <div className="error">{offerError}</div>
                    </form>
                    <button className="tabs" onClick={() => toggleTab(9)} >Prev</button>  <button className="tabs1" onClick={() => toggleTab(11)}>Next ➟</button>
                </div>
                <div className={toggleState === 11 ? "content  active-content" : "content"}>
                    
                    <form className="d-flex flex-column" onSubmit={registerCustomer}>
                    <br/>
                        <label className=''>What kind of guest wil you be looking for? </label><br/>
                        <textarea className='form-control' rows={3} onChange={changeKindof_Guests} onBlur={checkKindof_Guests} required type="text" placeholder=''/>
                        <br/>
                        <div className="error">{kindof_guestsError}</div>
                    </form>
                    <button className="tabs" onClick={() => toggleTab(10)} >Prev</button>  <button className="tabs1" onClick={() => toggleTab(12)}>Next ➟</button>
                </div>
                <div className={toggleState === 12 ? "content  active-content" : "content"}>
                    
                    <form className="d-flex flex-column" onSubmit={registerCustomer}>
                    <br/>
                        <label className=''>What has the greatest impact in ur life and why? </label><br/>
                        <textarea className='form-control' rows={3} onChange={changeGreatest_Impact} required onBlur={checkGreatest_Impact} type="text" placeholder=''/>
                        <br/>
                        <div className="error">{greatest_impactError}</div>
                    </form>
                    <button className="tabs" onClick={() => toggleTab(11)} >Prev</button>  <button className="tabs1" onClick={() => toggleTab(13)}>Next ➟</button>
                </div>
                <div className={toggleState === 13 ? "content  active-content" : "content"}>
                    
                    <form className="d-flex flex-column" onSubmit={registerCustomer}>
                    <br/>
                        <label className=''>What is your most cherished memories from childhood? </label><br/>
                        <textarea className='form-control' rows={3} onChange={changeCherished_Memories} required onBlur={checkCherished_Memories} type="text" placeholder=''/>
                        <br/>
                        <div className="error">{cherished_memoriesError}</div> 
                    </form>
                    <button className="tabs" onClick={() => toggleTab(12)} >Prev</button>  <button className="tabs1" onClick={() => toggleTab(14)}>Next ➟</button>
                </div>
                <div className={toggleState === 14 ? "content  active-content" : "content"}>
                    
                    <form className="d-flex flex-column" onSubmit={registerCustomer}>
                    <br/>
                        <label className=''>Will prefer taking pictures on vacation?  </label><br/>
                        <textarea className='form-control' rows={3} onChange={changePictures} required onBlur={checkPictures} type="text" placeholder=''/>
                        <br/>
                        <div className="error">{picturesError}</div>
                    </form>
                    <button className="tabs" onClick={() => toggleTab(13)} >Prev</button>  <button className="tabs1" onClick={() => toggleTab(15)}>Next ➟</button>
                </div>
                <div className={toggleState === 15 ? "content  active-content" : "content"}>
                    
                    <form className="d-flex flex-column" onSubmit={registerCustomer}>
                    <br/>
                        <label className=''>Journey or destination which is important? </label><br/>
                        <textarea className='form-control' rows={3} onChange={changeJourner_Destination} required onBlur={checkJourner_Destination} type="text" placeholder=''/>
                        <br/>
                        <div className="error">{journer_destinationError}</div>
                    </form >
                    <button className="tabs2" onClick={() => toggleTab(14)} >Prev</button><br/><br/>
                    <form className="sub" onSubmit={registerCustomer}>
                        <button className='bt ' >Submit</button><br/>
                    </form><br/>
                </div>     
            </div>
        </div>
    );
}
export default Questionary;