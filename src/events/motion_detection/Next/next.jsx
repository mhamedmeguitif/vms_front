import React from 'react';
import Profile from  "../../../profile/profile"; 
import "./next.css"
import ImageMotion from "../../../images/animating.svg"
import axios from 'axios';
import simpleAuth from '../../../auth/auth';

const next = () => {

  const url = "http://127.0.0.1:8000/motion_detection/"

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
                <img src={ImageMotion} className="imageMotion"/>
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
