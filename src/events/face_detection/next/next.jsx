import React from 'react';
import Profile from  "../../../profile/profile"
import Image33 from  "../../../images/Surveillance33.svg"
import "./next.css"
const next = () => {
    return (
        <div>
            <Profile/>
            <div className="containerMD">
                <img src={Image33} className="imageMotion"/>
                <a href="/FD/loader" class="animation submitbtn  submitImage nextMd">
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
