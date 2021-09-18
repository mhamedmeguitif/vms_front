import React, {useState} from 'react';
import Multiselect from 'multiselect-react-dropdown';
import makeAnimated from 'react-select/animated';
import Profile from  "../profile/profile"; 
import ImageSettings from "../images/settings.svg"
import "./addnewdevice.css"
import axios from 'axios';
import simpleAuth from '../auth/auth';

const Addnewdevice = () => {

  let url= 'http://127.0.0.1:8000/data/cameras'

  const [cam, setCam] = useState({model:'', room:'', emplacement:''})
  const changeHandler = (e) => {setCam({...cam, [e.target.name]: e.target.value})}
  const submitHandler = (e) => {  e.preventDefault(); axios.post(url, JSON.stringify(cam)).then(resp=>{console.log(resp)}).catch(err=>{console.log(err)})}
  
    return (
        <div>
          {simpleAuth()}
          <Profile/>
          <div class="container1">
            <div class="left">
              <div class="header">
                <img class="imagesettings" src={ImageSettings}/>
              </div>
            <div class="form_container">
            <div class="form">
              <form>
                <input name="model" type="text" class="form-field animation a3" placeholder="Brand" value={cam.model} onChange={changeHandler}/>
                <input name="room" type="text" class="form-field animation a3" placeholder="room" value={cam.room} onChange={changeHandler}/>
                <input name="emplacement" type="text" class="form-field animation a4" placeholder="location" value={cam.emplacement} onChange={changeHandler}/>
                <Multiselect
                isObject={false}
                className="selectmultioption animation a4"
                onRemove={function noRefCheck(){}}
                onSearch={function noRefCheck(){}}
                onSelect={function noRefCheck(){}}
                options={[
                'Mhamed',
                'Ramzi',
                'Abdallah',
                'Slamat',
                'Loko'
                ]}
                />
                <a href="#" class="animation submitbtn" onClick={submitHandler}>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </a>
            </form>
          </div>
        </div>
      </div>
    <div class="right"></div>
  </div>
</div>);}

export default Addnewdevice;
