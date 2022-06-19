import React from 'react';
import './index.css'

import ScrollingLinks from './components/ScrollingLinks'
import ButtonsSection from './components/ButtonsSection'
import Data from './components/Data'
import Results from './components/Results'
import Percentage from './components/Percentage'
const App=()=>{
  return(
    <form className="Main_form">
      <h3>Schedule</h3>
      <ScrollingLinks />
      <hr style={{border:"1.5px solid lightskyblue",backgroundColor:"lightskyblue"}} />
      <ButtonsSection />
      <Data />
      <div style={{backgroundColor:" #122036",border:"2px solid #122036",margin:"5px 5px 5px 5px"}}>
      <Results />
      <Percentage />
      </div>
    </form>
  )
}
export default App;