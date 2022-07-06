import React from 'react'
import Style from './ButtonStyle.css'


function Buttons(props) {
  let className = "redbtn";
  if (props.Type == "White") {
    className = "whitebtn"
  }
  if (props.Size == "Large") {
    className = className + " " + "largebtn"
  }
  return (
    <div className={className}>{props.Text}</div>
  )
}

export default Buttons


{/* <div className="description-1-button-1">Dry aged</div>
<div className="description-1-button-2">Alte Wurtz</div> */}
