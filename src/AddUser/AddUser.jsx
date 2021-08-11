import React from "react";
import { Divider, Grid, Image, Segment } from "semantic-ui-react";
import Profile from "../profile/profile";
import "./AddUser.css";
import logo from "../images/Security_on.svg";
import sec_logo from "../images/Profile.svg";
const login = () => (
  <div>
      <Profile/>
    <div class="parent">
      <div class="item1">
        <div class="login-box   ">
          <img src={logo} alt="logo" class="image_logo" />
          <h2>Sign up</h2>
          <form>
            <div class="user-box body">
              <input type="text" />
              <label>Email</label>
            </div>
            <div class="user-box">
              <input type="text" />
              <label>Username</label>
            </div>
            <div class="user-box body">
              <input type="password" />
              <label>Password</label>
            </div>
            <div class="user-box">
              <input type="password" />
              <label>Confirm Password</label>
            </div>
            <a href="#">
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
);

export default login;
