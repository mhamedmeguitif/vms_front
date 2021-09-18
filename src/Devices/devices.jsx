import React, {useState} from 'react';
import './devices.css';
import Profile from  "../profile/profile"
import axios from 'axios';
import { useEffect } from 'react';
import simpleAuth from '../auth/auth';

const Devices = () => {

  let url = "http://127.0.0.1:8000/data/cameras"

  const [cams, setCams] = useState(null);

  useEffect(()=>{
    axios.get(url).then(resp=>{
      setCams(resp.data);
    }).catch(err=>{console.log(err)})
  }, []);

  return (
    <div>
      {simpleAuth()}
      {cams &&<div>
      <Profile/>
      <div class="containerSE">
      <main class="st_viewport">
        <div class="st_wrap_table" data-table_id="0">
          <header class="st_table_header">
            <h2>List of camera</h2>
            <div class="st_row">
              <div class="st_column _rank">ID</div>
              <div class="st_column _name">Brand</div>
              <div class="st_column _surname">Up time</div>
              <div class="st_column _year">Room </div>
              <div class="st_column _section">Channel Name</div>
              <div class="st_column _section">status</div>
            </div>
          </header>
          <div class="st_table">
            {cams.map(camera => {
              return <div class="st_row">
                <div class="st_column _rank">{camera.id}</div>
                <div class="st_column _name">{camera.model}</div>
                <div class="st_column _surname">3:00:00</div>
                <div class="st_column _year">{camera.room}</div>
                <div class="st_column _section">C 1 </div>
                <div class="st_column _section">ON </div>
              </div>
            })}
            <div class="st_row">
                <div class="st_column _rank">1</div>
                <div class="st_column _name">mode</div>
                <div class="st_column _surname">3:00:00</div>
                <div class="st_column _year">R 15</div>
                <div class="st_column _section">C 1 </div>
                <div class="st_column _section">ON </div>
              </div>
          </div>
          
        </div>
      </main>
    </div></div>}
  </div>);}

export default Devices;
