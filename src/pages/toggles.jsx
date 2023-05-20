import React, { useEffect, useRef } from 'react'
import './toggles.css';
import { update, ref } from 'firebase/database';
import { database } from '../firebase/firebase';



export default function Toggles() {
   const [bulb1, setBulb1] = React.useState(false);
   const [bulb2, setBulb2] = React.useState(false);
   const [bulb3, setBulb3] = React.useState(false);

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    useEffect(()=>{
        if(bulb1){
            update(ref(database),
            {
                "bulb 1": true
            });
        }
        else
        update(ref(database),
            {
                "bulb 1": false
            });
        if(bulb2){
            update(ref(database),
            {
                "bulb 2": true
            });
        }
        else
        {
            update(ref(database),
            {
                "bulb 2": false
            });
        }
        if(bulb3){
            update(ref(database),
            {
                "bulb 3": true
            });
        }
        else
        {
            update(ref(database),
            {
                "bulb 3": false
            });
        }

    },[bulb1, bulb2, bulb3])
    const handleChange = () =>{
        if(ref1.current.checked){
            setBulb1(true);
        }
        else
        {
            setBulb1(false);
        }
        if(ref2.current.checked){
            setBulb2(true);
        }
        else
        {
            setBulb2(false);
        }
        if(ref3.current.checked){
            setBulb3(true);
        }
        else
        {
            setBulb3(false);
        }
    }
  return (
    <div className='container-light'>
        
        <div className="switch-holder">
            <div className="switch-label">
                <i class="fa fa-bluetooth-b"></i><span>Light 1</span>
            </div>
            <div class="switch-toggle">
                <input type="checkbox" id="bluetooth" ref={ref1} onClick={handleChange}/>
                <label for="bluetooth"></label>
            </div>
        </div>
        <div class="switch-holder">
            <div class="switch-label">
                <i class="fa fa-wifi"></i><span>Light 2</span>
            </div>
            <div class="switch-toggle">
                <input type="checkbox" id="wifi" ref={ref2} onClick={handleChange}/>
                <label for="wifi"></label>
            </div>
        </div>
        <div class="switch-holder">
            <div className='switch-label'>
                <i class="fa fa-map-marker"></i><span>Light 3</span>
            </div>
            <div class="switch-toggle">
                <input type="checkbox" id="location" ref={ref3} onClick={handleChange}/>
                <label for="location"></label>
            </div>
        </div>
    </div>
  )
}
