import React from 'react';
import Profile from  "../../../profile/profile"
import ImageSer from  "../../../images/surveillance11.svg"
import './webcam.css'



const webcam = () => {
    return (
        <div>
            <Profile/>
            <div className="container1">
              <img src={ImageSer} className ="image11"/>
              <a href="/OD/WEBCAM/loader" class="animation submitbtn  submitImage next">
            <span></span>
            <span></span>
            <span></span>
            
          Next 
            </a>

            </div>

        </div>
    );
};


webcam.propTypes = {

};


export default webcam;
