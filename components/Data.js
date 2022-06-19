import React from 'react';
import './ScrollingLinks.css'
import arrow from '../Icons/next.png'

const Data=()=>{
    return(
        <div className="data-style" >
            
            <button style={{color:"white",backgroundColor:"red",margin:"5px",border:"none",borderRadius:"6px",
        width:"10%"}}>INT</button>
            <p style={{padding:"0px 250px 0px 0px"}} >South Africa tour to India,2022</p>
         <img src={arrow} alt="icon" width="5%" height="40px" style={{margin:"0px 13px 0px 0px"}}/>
       
        </div>
    )
}
export default Data;