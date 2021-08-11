import React from 'react';
import Multiselect from 'multiselect-react-dropdown';
import makeAnimated from 'react-select/animated';
import Profile from  "../profile/profile"; 
import ImageSettings from "../images/settings.svg"
import "./addnewdevice.css"

const animatedComponents = makeAnimated();
const options = [
    { value: 'chocolate', label: 'Mhamed ' },
    { value: 'chocolate', label: 'Ramzi' },
    { value: 'chocolate', label: 'Selamat' },
    { value: 'chocolate', label: 'Abdalah' },
    { value: 'strawberry', label: 'Loko' },
   
  ]
const addnewdevice = () => {
    return (
        <div>
            <Profile/>
            
            <div class="container1">
  <div class="left">
    <div class="header">
      <img class="imagesettings" src={ImageSettings}/>
    </div>
   <div class="form_container">
   <div class="form">
   
   <input type="text" class="form-field animation a3" placeholder="Brand"/>
   <input type="text" class="form-field animation a3" placeholder="room"/>
   <input type="text" class="form-field animation a4" placeholder="location"/>
   <Multiselect
isObject={false}
className="selectmultioption animation a4"
onRemove={function noRefCheck(){}}
onSearch={function noRefCheck(){}}
onSelect={function noRefCheck(){}}
options={[
 'Mhamed',
 'Ramzi',
 'Abdalah',
 'Slamat',
 'Loko'
]}
/>

   <a href="/realTime" class="animation submitbtn">
   <span></span>
   <span></span>
   <span></span>
  
  Submit
 </a>
 </div>
 

   </div>
  </div>
  <div class="right"></div>
</div>
            </div>
        
    );
}

export default addnewdevice;
