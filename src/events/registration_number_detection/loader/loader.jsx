import React from "react";
import Profile from "../../../profile/profile";
import imageCar from  "../../../images/Vehicle_sale.svg"
import "./loader.css";
import simpleAuth from "../../../auth/auth";

const loader = () => {
  return (
    <div>
      {simpleAuth()}
            <Profile/>
            <div className="container1">
              <img src={imageCar} className ="image11"/>
              <a href="/PD/next" className="animation submitbtn  submitImage next">
            <span></span>
            <span></span>
            <span></span>
            
          Next 
            </a>

            </div>

        </div>
  );
};

export default loader;
