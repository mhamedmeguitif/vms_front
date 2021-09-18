import React, {useState, useEffect  } from 'react'
import './profile.css'
import ESI from  '../images/logoesi.png'
import User from  '../images/user.svg'
import axios from 'axios'
import Cookies from 'js-cookie'

const Profile = props => {

    return (
        <div>
   <div class="hd">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About </a></li>
                    <li><a href="/">LIBRERIES</a></li>
                    <li><a href="/">Contact</a></li>
                    
                </ul>
            </div>
  
      
 
      
      <div class="area"></div><nav class="main-menu">
            <ul>
            <li>
                <div class="pic_dimention">
                <img src={User}  class="user_image"/>
                  
                </div>
                   
            </li>
              
                <li class="has-subnav">
                    <a href="/realTime">
                    <i class="fa fa-video fa-2x"></i>  
                        <span class="nav-text">
                           real time video
                        </span>
                    </a>
                    
                </li>
                
                <li class="has-subnav">
                    <a href="/savedEvents">
                       <i class="fa fa-folder-open fa-2x"></i>
                        <span class="nav-text">
                            saved events
                        </span>
                    </a>
                   
                </li>
                
              
                <li>
                   <a href="/devices">
                       <i class="fa fa-table fa-2x"></i>
                        <span class="nav-text">
                            Devices
                        </span>
                    </a>
                </li>
                <li>
                   <a href="/newDevice">
                        <i class="fa fa-plus-circle fa-2x"></i>
                        <span class="nav-text">
                            Add new device 
                        </span>
                    </a>
                </li>
                <li>
                   <a href="/AddUser">
                        <i class="fa fa-user fa-2x"></i>
                        <span class="nav-text">
                            Add new User
                        </span>
                    </a>
                </li>
              
                <li>
                    <a href="/OD">
                       <i class="fa fa-object-ungroup fa-2x" ></i>
                        <span class="nav-text">
                            Object  detection
                        </span>
                    </a>
                </li>
                <li>
                    <a href="/MD">
                        <i class="fa fa-podcast fa-2x"></i>
                        <span class="nav-text">
                            Motion detection 
                        </span>
                    </a>
                  
                </li>
                <li class="has-subnav">
                    <a href="PD">
                       <i class="fa fa-car fa-2x"></i>
                        <span class="nav-text">
                        plette detection
                        </span>
                    </a>
                    
                </li>
                <li>
                    <a href="FD">
                    <i class="fa fa-check-circle fa-2x"></i> 
                        <span class="nav-text">
                          Face detection 
                        </span>
                    </a>
                </li>
                
            </ul>

            <ul class="logout">
                <li>
                 <img src={ESI} class="esi_sba" />
                </li>
                <li>
                   <a href="/">
                         <i class="fa fa-power-off fa-2x"></i>
                        <span class="nav-text">
                            Logout
                        </span>
                    </a>
                </li>
                  
            </ul>
        </nav>
  
    
        </div>
    )
}



export default Profile
