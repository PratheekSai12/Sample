import React from 'react';
import {useNavigate} from 'react-router-dom';

function Interface2(props) {
    const navigate = useNavigate();
    var profile=async (event)=>{
        navigate('/profile');
    }
    return (
        <div className="custom-container">
        <div className="one">
            <button onClick={profile} style={{ fontSize: "2.5rem"}}  href="profile">
              My Profile
            </button><br/>
            <a style={{ fontSize: "2.5rem"}} href="addproperty">
              List your Property
            </a>
            </div>          
        </div>
    );
}

export default Interface2;