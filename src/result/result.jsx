import React, {useState, useContext} from 'react';
import Profile from  "../profile/profile"
import simpleAuth from '../auth/auth';
import axios from 'axios';
import "./result.css"
import ReactPlayer from 'react-player';

const Result = () => {

    let image = null
    let video = null
    let text = null

    const acceptedImageTypes = ['jpeg', 'png'];
    const acceptedVideoTypes = ['mp4'];
    const acceptedText = ['txt']

    var re = /(?:\.([^.]+))?$/;

    var ext = re.exec();

    if(acceptedImageTypes.includes(ext)){
        image = 'http://127.0.0.1:8000/data/images/'
    }else{
        if(acceptedVideoTypes.includes(ext)){
            video = 'http://127.0.0.1:8000/data/videos/'
        }else{
            if(acceptedText.includes(ext)){
                text = 'http://127.0.0.1:8000/data/text/'
            }
        }
    }

    return (
        <div>
            <Profile />
            <div className="cor">
                {image && <img className="som" src = {image} width="600px" style={{ margin: '2px' }}/>}
                {video && <ReactPlayer controls url={video} className="som"/>}
                {text && <h1>{text}</h1>}
            </div>
        </div>);}
  
  export default Result;
  