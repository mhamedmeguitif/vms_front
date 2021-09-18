import React from 'react';
import Profile from  "../../../profile/profile"
import ImageSer from  "../../../images/surveillance11.svg"
import './webcam.css'
import axios from 'axios';
import simpleAuth from '../../../auth/auth';

const Webcam = () => {
  const url = "http://127.0.0.1:8000/object_detection/webcam"

  const nextHandler = axios.post(url,{data:null}).then(resp=>{
    console.log(resp);
  })

  return (
    <div>
      {simpleAuth()}
        <Profile/>
        <div className="container1">
          <img src={ImageSer} className ="image11"/>
          <a href="/OD/WEBCAM/loader" class="animation submitbtn  submitImage next" onClick={nextHandler}>
            <span></span>
            <span></span>
            <span></span>
            Next 
          </a>
        </div>
      </div>
    );
};

export default Webcam;
