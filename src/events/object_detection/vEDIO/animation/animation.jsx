import React from 'react';
import Profile from  "../../../../profile/profile"
import "./animation.css"
import simpleAuth from '../../../../auth/auth';

const animation = () => {
    return (
        <div>

            {simpleAuth()}
             <div>
            <Profile/>
            
            
           
            <div class="water"></div>
           <p className="waite"> Please wait a little ... </p>
           


 
  <a class="button2 type2" href="/">
    see the resualte 
  </a>
  
  


            </div>
        </div>
    );
}

export default animation;
