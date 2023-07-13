import React from 'react';
import './Interface.css';
function Interface(props) {
    return (   
        <div className="custom-container">
        {/* <h1 className='two'><img src='https://us.123rf.com/450wm/krissikunterbunt/krissikunterbunt1904/krissikunterbunt190400296/krissikunterbunt190400296.jpg?ver=6' width='50' height='40'/> Aaladin</h1> */}
          <div className="one">
            <a style={{ fontSize: "1.5rem"}} href="login">
              Login/Signup
            </a>
            </div>
          <div className='three'>
          <h1 ><strong> “ Discover the hidden YOU ☺” </strong></h1>
          </div>
          {/* <div className="three"> */}
          {/* <button className='btn btn-success'> ~
            <a style={{ fontSize: "1.5rem" }} href="x">
              Admin
            </a>
            ~</button> */}
          
        </div>
    );
}
export default Interface;