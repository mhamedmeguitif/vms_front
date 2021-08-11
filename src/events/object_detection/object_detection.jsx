import React from 'react';
import Profile from  "../../profile/profile"
import "./object_detection.css"
const object_detection = () => {
    return (
        <div>
            <Profile/>
            <div class="titleContainer"><h1 class="title">Object Detection </h1></div>
           <div className="lineTitle" ></div>
            <div class="containerOD">
                
  <div class="card">
    <div class="box">
      <div class="content">
        <h2>01</h2>
        <h3>WebCam</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
        <a href="/OD/WEBCAM">GO </a>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="box">
      <div class="content">
        <h2>02</h2>
        <h3>Image</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
        <a href="/OD/IMAGE">GO</a>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="box">
      <div class="content">
        <h2>03</h2>
        <h3>Video</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
        <a href="/OD/VIDEO">GO</a>
      </div>
    </div>
  </div>
</div>
        </div>
    );
}

export default object_detection;
