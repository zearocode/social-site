import React from 'react'
import "./Widgets.css";
import { Info } from '@mui/icons-material';

function Widgets() {
  return (
    <div className='widgets'>
     <div className="widgets_header">
      <h2>LinkedIn News</h2>
      <Info />
     </div>
    </div>
  )
}

export default Widgets