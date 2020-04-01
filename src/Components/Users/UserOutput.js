import React from 'react';
import StyleBtn from '../StyleBtn';


const userOutput = (props) => {
  const { userName, surName, dob, country, click } = props
  return (
    <div className = 'Users1'>

      <p>User Name: { userName }</p>
      <p>User Surname: {surName}</p>
      <p>User Date Of Birth: { dob }</p>
      <p>User Country: { country }</p>
      <p onClick = { click }>
        <StyleBtn>Delete Me</StyleBtn>
      </p>

    </div>
  )
}

export default userOutput;