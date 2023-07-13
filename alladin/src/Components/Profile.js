import React ,{useState} from 'react';

function Profile(props) {
    var [pic,setPic]=useState([]);
    var profilepic = (event)=>{
        const file = event.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () => {
          setPic(new Uint8Array(reader.result));
        };
    
        reader.readAsArrayBuffer(file);
        console.log(reader)
      };
    return (
    <div className="custom-container1">
        <div className="inner-container1">
            <label className='form-log'>profile photo</label>
            <input className='form-control' type="file" required  on onChange={profilepic}></input><br/>
        </div>
    </div>
    );
}

export default Profile;