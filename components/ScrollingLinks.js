import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import './ScrollingLinks.css'

const ScrollingLinks=()=>{
    return(
        <Router>
            <div style={{display:"flex",justifyContent:"center",justifyContent:"space-around"}} >
                <Link to="" className="decoration">Upcoming</Link>
                <Link to="" className="decoration">Live</Link>
                <Link to="" className="decoration">Results</Link>
            </div>
        </Router>
    )
}
export default ScrollingLinks;