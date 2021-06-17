import React,{useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



import './App.css';

function App() {
  const [value, onChange] = useState(new Date());
  const test=()=>
  {
    console.log(value.toDateString());
    console.log(typeof(value.toDateString()));
  }
  return (
    <div >
              <div className="maindiv">
               
                    <div className="childdiv">
                    <button className="logout">Logout</button>
                    </div>
                    <p><b>Meeting Room Booking</b></p>
                    <select id="pet-select">
                   <option value="" size="35">Training Room</option>   
                  </select>
                      <input type="text" placeholder="Entre your  Room" size="35"></input><br></br>
                      <input type="text" placeholder="Entre Meeting description" size="35"></input><br></br>
                     
                      <div className="calendar">
                     <Calendar
                     onChange={onChange}
                     value={value}
                    />

                   </div>
                   <button onClick={test}></button>
                   <p>{value.toDateString()}</p>
                      <div>
                        
                        <p><b>Please select your preferred slot</b></p>
                        <div className="slotbuttondiv">
                        <button className="slotbutton">10:00 AM</button>
                        <button className="slotbutton">10:30 AM</button>
                        <button className="slotbutton">11:00 AM</button>
                        <button className="slotbutton">11:30 AM</button>
                        <button className="slotbutton">12:00 PM</button>
                        <button className="slotbutton">12:30 AM</button>
                        <br></br><br/>
                        <button id="butto" className="slotbutton">1:00 PM</button>
                        <button  id="butto" className="slotbutton">1:30 PM</button>
                        <button id="butto" className="slotbutton">2:00 PM</button>
                        <button className="slotbutton">2:30 PM</button>
                        <button id="butto" className="slotbutton">3:00 PM</button>
                        <button id="butto" className="slotbutton">3:30 PM</button>
                        <br></br><br/>
                        <button id="butto" className="slotbutton">4:30 PM</button>
                        <button id="butto" className="slotbutton">5:00 PM</button>
                        <button id="butto" className="slotbutton">5:30 PM</button>
                        <button  id="butto" className="slotbutton">6:00 PM</button>
                        <button  id="butto" className="slotbutton">6:30 PM</button>
                        <button id="butto" className="slotbutton">7:00 PM</button>
                        <br/><br/>
                        <button id="slotbutton" className="slotbutton">10:00 AM</button>

                        </div>
                      </div>
                      <div>
                        <button className="book">BOOK APPOINTMENT</button>
                      </div>
                      <br/> <br/> <br/> <br/> <br/> <br/>
                      
              </div>

                
     
             
    </div>
  );
}


export default App;
