import React from 'react';
import './Users1.css'
const userOutput = (props) => {
  const { userName, surName, dob, country } = props
  return (
    <div className = 'Users1'>

      <p>User Name: { userName }</p>
      <p>User Surname: {surName}</p>
      <p>User Dateofbirth: { dob }</p>
      <p>User Country: { country }</p>

    </div>
  )
}

export default userOutput;