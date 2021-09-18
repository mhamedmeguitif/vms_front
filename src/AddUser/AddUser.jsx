import React, {useState} from "react";
import Profile from "../profile/profile";
import "./AddUser.css";
import logo from "../images/Security_on.svg";
import sec_logo from "../images/Profile.svg";
import axios from "axios";
import simpleAuth from '../auth/auth';

const Login = () => {

  let url= 'http://127.0.0.1:8000/users';

  const [info, setInfo] = useState({email:'', username:'', password:'', passconf:''});
  const changeHandler = (e) => {setInfo({...info, [e.target.name]: e.target.value});};
  const submitHandler = (e) => {e.preventDefault(); axios.post(url, JSON.stringify(info)).then(resp=>{console.log(resp)}).catch(err=>{console.log(err)})};
  
  return <div>
    {simpleAuth()}
    <Profile/>
    <div class="parent">
      <div class="item1">
        <div class="login-box   ">
          <img src={logo} alt="logo" class="image_logo" />
          <h2>Sign up</h2>
          <form>
            <div class="user-box body">
              <input name="email" type="text" value={info.email} onChange={changeHandler}/>
              <label>Email</label>
            </div>
            <div class="user-box">
              <input name="username" type="text" value={info.username} onChange={changeHandler}/>
              <label>Username</label>
            </div>
            <div class="user-box body">
              <input name="password" type="password" value={info.password} onChange={changeHandler}/>
              <label>Password</label>
            </div>
            <div class="user-box">
              <input name="passconf" type="password" value={info.passconf} onChange={changeHandler}/>
              <label>Confirm Password</label>
            </div>
              <a href="#" onClick={submitHandler}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </a>
              <span></span>
          </form>
        </div>
      </div>
      <div class="item2">
        <img class="img_bodygard" src={sec_logo} alt="logo" />
      </div>
    </div>
  </div>
};

export default Login;
