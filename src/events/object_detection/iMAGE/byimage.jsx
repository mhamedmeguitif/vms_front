import axios from 'axios';
import React,{useState} from 'react';
import Profile from  "../../../profile/profile"
import './byimage.css'
import simpleAuth from '../../../auth/auth';

const Byimage = () => {

    const url = 'http://127.0.0.1:8000/object_detection/image';

    const [image, setImage] = useState();
    const [result, setResult] = useState();

    const [highlight, setHighlight] = React.useState(false);
    const [preview, setPreview] = React.useState("");
    const [drop, setDrop] = React.useState(false);

    const changeHandler = (e) => {handleUpload(e); setImage(e.target.files);};
    const uploadHandler = (e) => {
        const uploadedFile = new FormData();
        uploadedFile.append('image', image[0]);
        axios.post(url, uploadedFile, {headers: {'Content-Type':'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'}}).then((resp)=>{
            console.log(resp)
            setResult(resp.data);
        })
    }

    const handleEnter = (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log("enter!");

            preview === "" && setHighlight(true);
    };


    const handleOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("over!");

          preview === "" && setHighlight(true);
     };

    const handleLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("leave!");
        setHighlight(false);
    };

    const handleUpload = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("drop!");
        setHighlight(false);
        setDrop(true);

        const [file] = e.target.files || e.dataTransfer.files;

         uploadFile(file);
    };

    function uploadFile(file) {
        const reader = new FileReader();
        reader.readAsBinaryString(file);

        reader.onload = () => {
        // this is the base64 data
        const fileRes = btoa(reader.result);
        console.log(`data:image/jpg;base64,${fileRes}`);
        setPreview(`data:image/jpg;base64,${fileRes}`);
        };

        reader.onerror = () => {
        console.log("There is a problem while uploading...");
        };
     }

    return (
        <div>
            {simpleAuth()}
            <Profile/>
            {!result&&<div>
            <div class="titleContainer"><h1 class="title">Uplaod the  image and Make a test ! </h1></div>
           <div className="lineTitle" ></div>
                <div
                    onDragEnter={(e) => handleEnter(e)}
                    onDragLeave={(e) => handleLeave(e)}
                    onDragOver={(e) => handleOver(e)}
                    onDrop={(e) => handleUpload(e)}
                    className={`upload${
                    highlight ? " is-highlight" : drop ? " is-drop" : ""
                    }`}
                    style={{ backgroundImage: `url(${preview})` }}
                >
                <form class="my-form">
                <p>Drag and Drop image here</p>
                <div className="upload-button">
                    <input
                    type="file"
                    className="upload-file"
                    accept="image/*"
                    onChange={changeHandler}
                    />
                    <button className="button">Upload Here</button>
                </div>
                </form>
             </div>
            <a href="#" class="animation submitbtn  submitImage" onClick={uploadHandler}>
                <span></span>
                <span></span>
                <span></span>
                
                see the resualt 
                </a>
             </div>}
             {result&&<div>
                <div className="cor">
                    <div className="som">
                        {image && <img className='pra' src = {'http://127.0.0.1:8000/treated/images/'+result.src} width="500px" style={{ margin: '2px' }}/>}
                        <h2>The image contains : {result.str}</h2>
                </div>
            </div>
                </div>}
 </div>
    
        
    
    );
}

export default Byimage;
