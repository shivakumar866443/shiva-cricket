import React from 'react';
import place from '../Icons/placeholder.png'
import bell from '../Icons/white-icon.png'
import IND from '../Icons/india.png'
import SA from '../Icons/south-africa.png'

import './ScrollingLinks.css'

const Results=()=>{
    return(
        <form className="form_design">
            1st T20 <small style={{border:"1.5px solid lightskyblue",borderRadius:"6px",padding:"4px",
                         fontSize:"8px",backgroundColor:"lightskyblue",margin:"8px"}}>UPCOMING</small><br />
            <img src={place} alt="location" width="5%" height="20px"/><small>Delhi</small>
            <img src={bell} alt="bell-icon" width="5%" style={{float:"right",padding:"0px 25px 5px 0px",
             }} />
                     <div className="card-style">
                        
                         <img src={IND} alt='Ind' width="10%" height="50px" style={{marginTop:"10px"}}/>
                        <small style={{marginTop:"30px",marginRight:"140px"}}>IND</small>
                         
                         <h5 style={{border:"2px solid green",padding:"5px",borderRadius:"10px",color:"#0a9125"}}>T20</h5>
                         
                         <small style={{marginTop:"30px",marginLeft:"140px"}}>SA</small>
                         <img src={SA} alt="SA" width="10%" height="50px" style={{marginTop:"10px",marginRight:"5px"}} />
                         
                     </div>
            <div className="card-style" style={{fontSize:"15px",padding:"7px"}}>09 June, 07.00PM</div>
            

        </form>
    )
}
export default Results;