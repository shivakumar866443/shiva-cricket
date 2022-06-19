import React from 'react';

const Percentage=()=>{
    return(
        <div style={{margin:"15px"}}>
            <p>WIN PERCENTAGE</p>
            <small 
            style={{backgroundColor:"green",color:"green",borderRadius:"10px 0px 0px 10px"}}>
            -------------------------------------------------------------</small>
            <small
            style={{backgroundColor:"white",color:"white",borderRadius:"0px 10px 10px 0px"}}>
            -------------------------------------------------------</small>
            
            <div>
                <small style={{display:"flex",justifyContent:"space-between"}}>
                       <div> IND(54%)</div>
                       <div> SA(46%)</div>
                </small>
            </div>
        </div>
    )
}
export default Percentage;