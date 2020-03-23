import React from 'react';
import './Users1.css'
import './Btn.css'
const userOutput = (props) => {
  const { userName, surName, dob, country, click } = props
  return (
    <div className = 'Users1'>

      <p>User Name: { userName }</p>
      <p>User Surname: {surName}</p>
      <p>User Date Of Birth: { dob }</p>
      <p>User Country: { country }</p>
      <p onClick = { click }><button className = 'btn'>Delete Me</button></p>

    </div>
  )
}

export default userOutput;