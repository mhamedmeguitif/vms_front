import React from 'react';
import Profile from  "../../../profile/profile"

import "./loader.css"
const loader = () => {
    return (
        <div>
        <Profile/>
        <div class="titleContainer"><h1 class="title">the web cam will open  </h1></div>
       <div className="lineTitle" ></div>

        <div class="middle">
        <div class="bar bar1"></div>
        <div class="bar bar2"></div>
        <div class="bar bar3"></div>
        <div class="bar bar4"></div>
        <div class="bar bar5"></div>
        <div class="bar bar6"></div>
        <div class="bar bar7"></div>
        <div class="bar bar8"></div>
    </div>
    </div>
    );
}

export default loader;
