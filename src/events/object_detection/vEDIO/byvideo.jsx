import React,{useState} from 'react';
import Profile from  "../../../profile/profile"
import Image from  "../../../images/upload.svg"
import './byvideo.css'
import axios from 'axios';
import simpleAuth from '../../../auth/auth';
import ReactPlayer from 'react-player';

const Byvideo = () => {

    const url = "http://127.0.0.1:8000/object_detection/video"

    const [vid, setVid] = useState('');
    const [result, setResult] = useState();
    
    const changeHandler = (e) => {setVid(e.target.files);};
    const uploadHandler = (e) => {
        console.log(vid[0])
        const uploadedFile = new FormData();
        uploadedFile.append('video', vid[0]);
        axios.post(url, uploadedFile, {headers: {'Content-Type':'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'}}).then((resp)=>{
            setResult(resp.data.src)
        })
    }

    return (
        <div >
            {simpleAuth()}
           <Profile/>
           {!result&&<div class="container11">
            <img src ={Image} class="UploadV"/>   
            <div className="sub_tite">
            <h1 className="titleN">Upload the vedio</h1>
            <div className="line"> </div>
            </div>
            <input className = "inputFile" type ="file" onChange={changeHandler}/>
                <a class="btn" onClick={uploadHandler}>
                    <svg width="277" height="62">
                        <defs>
                            <linearGradient id="grad1">
                                <stop offset="0%" stop-color="#FF8282"/>
                                <stop offset="100%" stop-color="#E178ED" />
                            </linearGradient>
                        </defs>
                        <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
                    </svg>
                    <span>Next</span>
                </a>     
            </div>}
            <div className="cor">
                {result && <ReactPlayer controls url={'http://127.0.0.1:8000/treated/videos/'+result+'.mp4'} className="som"/>}
            </div>
        </div>
    );
}

export default Byvideo;
