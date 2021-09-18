import React, {useState} from 'react'
import { Divider, Grid, Image, Segment } from 'semantic-ui-react'
import './login.css'
import logo from '../images/Security_on.svg'
import sec_logo from  '../images/undraw_security_o890.svg'
import axios from 'axios'
import Cookies from 'js-cookie';
import { Redirect } from 'react-router';

const Login  = () => {

    const url = 'http://127.0.0.1:8000/users/login';

    const [log, setLog] = useState({email:"", password:""});
    const changeHandler = (e) => {setLog({...log, [e.target.name]: e.target.value})}
    const submitHandler = (e) => {axios.post(url, JSON.stringify(log)).then(resp=>{if(resp.data.jwt){Cookies.set("jwt", resp.data.jwt);window.location.replace("http://localhost:3000/realtime");}}).catch(err=>{console.log(err)})}                               
    return (<div class="parent">
        {Cookies.get('jwt') ? <Redirect to="/realTime" /> : ""}
        <div class="item1">
            <div class="login-box   ">
                <img src={logo} alt = 'logo' class="image_logo"/>
                <h2>Login</h2>
                <form>
                    <div class="user-box body">
                        <input name="email" value={log.email} onChange={changeHandler}/>
                        <label>email</label>
                    </div>
                    <div class="user-box">
                        <input type="password" name="password" value={log.password} onChange={changeHandler}/>
                        <label>Password</label>
                    </div>
                    <a onClick={submitHandler}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </a>  
                </form>
            </div>
        </div>
        <div class="item2">
            <img class="img_bodygard" src={sec_logo}alt = 'logo'/> 
        </div>
    </div>)}

export default Login ; 
