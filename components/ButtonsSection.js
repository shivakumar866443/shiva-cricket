import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import './ScrollingLinks.css'

const ButtonsSection=()=>{
    return(
        <Router>
        <div style={{display:"flex",justifyContent:"center",backgroundColor:"#2e3d54",borderRadius:"50px",
           margin:"0px 20px 0px 20px" }}>
        <Link to="" className="decoration2" >All</Link>
        <Link to="" className="decoration2" style={{border:"none"}}>International</Link>
        <Link to=""className="decoration2" style={{border:"none"}}>Demostic</Link>
        </div>
        </Router>
     )
}
export default ButtonsSection;