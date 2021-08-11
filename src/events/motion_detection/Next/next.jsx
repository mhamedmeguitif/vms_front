import React from 'react';
import Profile from  "../../../profile/profile"; 
import "./next.css"
import ImageMotion from "../../../images/animating.svg"
const next = () => {
    return (
        <div>
            <Profile/>
            <div className="containerMD">
                <img src={ImageMotion} className="imageMotion"/>
                <a href="/MD/loader" class="animation submitbtn  submitImage nextMd">
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
