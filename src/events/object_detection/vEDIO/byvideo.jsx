import React from 'react';
import Profile from  "../../../profile/profile"
import Image from  "../../../images/upload.svg"

import './byvideo.css'


const byvideo = () => {


    return (
        <div >
           <Profile/>
           <div class="container11">
           
            <img src ={Image} class="UploadV"/>
                             
               
                <div className="sub_tite">
                <h1 className="titleN">Upload the vedio</h1>
                <div className="line"> </div>
                </div>
                <input className = "inputFile" type ="file"/>
              

                
                
                    <a href="/OD/Video/animation" class="btn">
                        <svg width="277" height="62">
                            <defs>
                                <linearGradient id="grad1">
                                    <stop offset="0%" stop-color="#FF8282"/>
                                    <stop offset="100%" stop-color="#E178ED" />
                                </linearGradient>
                            </defs>
                            <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
                        </svg>
                    
                        <span>Next</span>
                    </a>    
                 



            
           </div>
          </div>
    );
}

export default byvideo;
