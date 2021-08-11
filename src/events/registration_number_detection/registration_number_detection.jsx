import React from "react";
import Profile from "../../profile/profile";
import "./registration_number_detection.css";
const registration_number_detection = () => {
  return (
    <div>
      <Profile />
      <div class="titleContainer">
        <h1 class="title">Palette Detection </h1>
      </div>
      <div className="lineTitle"></div>

      <div class="containerOD">
        <div class="card">
          <div class="box">
            <div class="content">
              <h2>01</h2>
              <h3>RealTime</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                totam velit? Iure nemo labore inventore?
              </p>
              <a href="/PD/loader">GO </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default registration_number_detection;
