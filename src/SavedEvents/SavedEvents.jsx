import React, {useState, useEffect} from 'react'
import Profile from '../profile/profile'
import './SavedEvents.css'
import axios from 'axios'
import simpleAuth from '../auth/auth'

function Videos() {
  let url = "http://127.0.0.1:8000/data/events"

  const [events, setEvents] = useState();
  const [obj, setObj] = useState([]);
  const [face, setFace] = useState([]);
  const [palet, setPalet] = useState([]);
  const [mov, setMov] = useState([])

  useEffect(()=>{
    axios.get(url).then(resp=>{
      setEvents(resp.data);
      setObj(resp.data.filter(r=>{return r.event_type=='fuck'}));
      setFace(resp.data.filter(r=>{return r.event_type=='face_detection'}));
      setMov(resp.data.filter(r=>{return r.event_type=='movement_detection'}));
      setPalet(resp.data.filter(r=>{return r.event_type=='pallet_detection'}));
      console.log(obj)
    }).catch(err=>{console.log(err)})
  }, []);

  return (
    <div>
      {simpleAuth()}
      {events && <div>
        <Profile/>
        <div class="containerSE">
          <main class="st_viewport">
            <div class="st_wrap_table" data-table_id="0">
              
              <header class="st_table_header">
                <h2>Object Detection</h2>
                <div class="st_row">
                  <div class="st_column _rank">ID</div>
                  <div class="st_column _name">Time</div>
                  <div class="st_column _surname">Type</div>
                  <div class="st_column _year">CAM  </div>
                  <div class="st_column _section">Channel Name</div>
                </div>
              </header>
              <div class="st_table">
                {obj.map(event => {
                  return <div class="st_row">
                    <div class="st_column _rank">{event.id}</div>
                    <div class="st_column _name">{event.event_at}</div>
                    <div class="st_column _surname">{event.camera}</div>
                    <div class="st_column _year">{event.camera_type}</div>
                    <div class="st_column _section">{event.video_src}</div>
                  </div>})
                }
              </div>
              <header class="st_table_header">
                <h2>Face Detection</h2>
                <div class="st_row">
                  <div class="st_column _rank">ID</div>
                  <div class="st_column _name">Time</div>
                  <div class="st_column _surname">Type</div>
                  <div class="st_column _year">CAM  </div>
                  <div class="st_column _section">Channel Name</div>
                </div>
              </header>
              <div class="st_table">
                {face.map(event => {
                  return <div class="st_row">
                    <div class="st_column _rank">{event.id}</div>
                    <div class="st_column _name">{event.event_at}</div>
                    <div class="st_column _surname">{event.camera}</div>
                    <div class="st_column _year">{event.camera_type}</div>
                    <div class="st_column _section">{event.video_src}</div>
                  </div>})
                }
              </div>
              <header class="st_table_header">
                <h2>Movement Detection</h2>
                <div class="st_row">
                  <div class="st_column _rank">ID</div>
                  <div class="st_column _name">Time</div>
                  <div class="st_column _surname">Type</div>
                  <div class="st_column _year">CAM  </div>
                  <div class="st_column _section">Channel Name</div>
                </div>
              </header>
              <div class="st_table">
                {mov.map(event => {
                  return <div class="st_row">
                    <div class="st_column _rank">{event.id}</div>
                    <div class="st_column _name">{event.event_at}</div>
                    <div class="st_column _surname">{event.camera}</div>
                    <div class="st_column _year">{event.camera_type}</div>
                    <div class="st_column _section">{event.video_src}</div>
                  </div>})
                }
              </div>
              <header class="st_table_header">
                <h2>Palette Detection</h2>
                <div class="st_row">
                  <div class="st_column _rank">ID</div>
                  <div class="st_column _name">Time</div>
                  <div class="st_column _surname">Type</div>
                  <div class="st_column _year">CAM  </div>
                  <div class="st_column _section">Channel Name</div>
                </div>
              </header>
              <div class="st_table">
                {palet.map(event => {
                  return <div class="st_row">
                    <div class="st_column _rank">{event.id}</div>
                    <div class="st_column _name">{event.event_at}</div>
                    <div class="st_column _surname">{event.camera}</div>
                    <div class="st_column _year">{event.camera_type}</div>
                    <div class="st_column _section">{event.video_src}</div>
                  </div>})
                }
              </div>
            </div>
          </main>
        </div>
      </div>}
    </div>
  )
}

export default Videos
