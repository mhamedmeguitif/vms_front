import "./App.css";
/* main componenets  */
import Login from "./login/login";
import Profile from "./profile/profile"
import AddUser from "./AddUser/AddUser";
import Home_Page from "./home/home";
import About_Page from "./about/about.jsx";
import ErrorPage from "./Error/error";
/*-------------functions ------------------ */
import RealTime from "./real_time_vedio/realtime";
import Devices from "./Devices/devices";
import ADD from "./ADD_new/addnewdevice";
/*-------------events----------------------- */
/*------------Object detection ------------ */
import ObjectDetection from "./events/object_detection/object_detection";
import ByImageDetection from "./events/object_detection/iMAGE/byimage";
import ByvideoDetection from "./events/object_detection/vEDIO/byvideo";
import ByWebcamDetection from "./events/object_detection/CAMERA/webcam";
import VideoUpload from "./events/object_detection/vEDIO/animation/animation";
import WeBcam from "./events/object_detection/CAMERA/lodere/loader";

/* ---------------FACE DETECTION event------------------- */
import FaceDetection from "./events/face_detection/face_detection";
import FaceDetectionNext from "./events/face_detection/next/next"
import FaceDetectionLoader from  "./events/face_detection/loader/loader"
/*----------------Motion detection events --------------- */
import MotionDetection from "./events/motion_detection/motion_detection";
import MotionDetectionNext from "./events/motion_detection/Next/next";
import MotionDetectionLoadre from "./events/motion_detection/loader/loader";

/*----------------Plette detection----------------------  */
import PaletteDetection from "./events/registration_number_detection/registration_number_detection";
import PaletteDetectionNext from "./events/registration_number_detection/next/next"
import PaletteDetectionloader from "./events/registration_number_detection/loader/loader";

import { BrowserRouter, Route } from "react-router-dom";
import SavedEvents from "./SavedEvents/SavedEvents";

import Result from "./result/result";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Home_Page} />
        <Route path="/AddUser" component={AddUser} /> {/*done*/}
        <Route path="/login" component={Login} /> {/*done*/}
        <Route path="/about_us" component={About_Page} />
        <Route path="/realTime" component={RealTime} />
        <Route path="/savedEvents" component={SavedEvents} />{/*half done*/}
        <Route path="/devices" component={Devices} /> {/*half done*/}
        <Route path="/newDevice" component={ADD} /> {/*done*/}
        <Route path="/profile" component={Profile}/> {/*half done*/}
        
        {/*Object detection*/}
        <Route exact path="/OD" component={ObjectDetection} />
        <Route exact path="/OD/IMAGE" component={ByImageDetection} />
        <Route exact path="/OD/VIDEO" component={ByvideoDetection} />
        <Route exact path="/OD/WEBCAM" component={ByWebcamDetection} />
        <Route exact path="/OD/Video/animation" component={VideoUpload} />
        <Route exact path="/OD/WEBCAM/loader" component={WeBcam} />
        {/*face detection*/}
        <Route exact path="/FD" component={FaceDetection} />
        <Route exact path="/FD/next" component={FaceDetectionNext} />
        <Route exact path="/FD/loader" component={FaceDetectionLoader} />


        {/*motion detection*/}
        <Route exact path="/MD" component={MotionDetection} />
        <Route exact path="/MD/next/" component={MotionDetectionNext} />
        <Route exact path="/MD/loader/" component={MotionDetectionLoadre} />

        {/*palette detection*/}
        <Route exact path="/PD" component={PaletteDetection} />
        <Route exact path="/PD/next" component={PaletteDetectionNext} />
        <Route exact path="/PD/loader" component={PaletteDetectionloader} />

        {//Results here
        }<Route exact path='/result' component={Result} />

        {/*404 handling*/}
        <Route path="/error" component={ErrorPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
