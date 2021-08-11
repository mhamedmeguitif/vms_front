import React from 'react'; 
import { Grid, Image } from 'semantic-ui-react'
import Profile from  '../profile/profile'
import Webcam  from  'react-webcam'
import noSignal from  "../images/nosignal.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import "./realtime.css"

function realtime() {
    return (
        <div class="all">
            <Profile/>
            <div class="container_grid">
            <Grid>
    

                <Grid.Row columns={4}>
                    <Grid.Column class="colomCam">
                        
                            <Webcam class="cameraView"/>
                       
                        <h3 class="title1 ">  <i class="fas fa-camera "></i> <span class="span"> </span> CAM--1</h3> 
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={noSignal}  />
                        <h3 class="title1 ">  <i class="fas fa-camera"></i>  <span class="span"> </span> CAM--2</h3> 
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={noSignal} />
                        <h3 class="title1 ">  <i class="fas fa-camera"></i> <span class="span"> </span> CAM--3</h3> 
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={noSignal} />
                        <h3 class="title1 ">  <i class="fas fa-camera"></i> <span class="span"> </span> CAM--4</h3> 
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={4}>
                    <Grid.Column class="colomCam">
                        <Image src={noSignal} />
                        <h3 class="title1 ">  <i class="fas fa-camera"></i><span class="span"> </span>  CAM--5</h3>  
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={noSignal} />
                        <h3 class="title1 ">  <i class="fas fa-camera"></i> <span class="span"> </span> CAM--6</h3> 
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={noSignal} />
                        <h3 class="title1 ">  <i class="fas fa-camera"></i> <span class="span"> </span> CAM--7</h3> 
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={noSignal} />
                        <h3 class="title1 ">  <i class="fas fa-camera"></i> <span class="span"> </span> CAM--8</h3> 
                    </Grid.Column>
                </Grid.Row>

    
             </Grid>

            </div>
        </div>
    )
}

export default realtime
