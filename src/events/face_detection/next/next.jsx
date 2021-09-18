import React from 'react';
import Profile from  "../../../profile/profile"
import Image33 from  "../../../images/Surveillance33.svg"
import "./next.css"
import axios from 'axios';
import simpleAuth from '../../../auth/auth';

const next = () => {

  const url = "http://127.0.0.1:8000/face_detection/"

  const nextHandler = () => {
    axios.post(url,{data:null}).then(resp=>{
        console.log(resp);
    }).catch(err=>{})
}

    return (
        <div>
            {simpleAuth()}
            <Profile/>
            <div className="containerMD">
                <img src={Image33} className="imageMotion"/>
                <a class="animation submitbtn  submitImage nextMd" onClick={nextHandler}>
            <span></span>
            <span></span>
            <span></span>
          Next 
            </a>

            </div>
        </div>
    );
}

export default next;
