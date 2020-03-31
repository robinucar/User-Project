import React from 'react';
import './Users1.css'
import styled from 'styled-components';

const StyledBtn = styled.button`
width: 20%;
margin: 16px auto;
border: 4px solid #eee;
box-shadow: 0 2px 2px #ccc;
padding: 16px;
text-align: center;
background-color:white;
color:black;
font-size: 15px;
&:focus {outline:0;};
&:hover {
  background-color:black;
  color:white;
}
`

const userOutput = (props) => {
  const { userName, surName, dob, country, click } = props
  return (
    <div className = 'Users1'>

      <p>User Name: { userName }</p>
      <p>User Surname: {surName}</p>
      <p>User Date Of Birth: { dob }</p>
      <p>User Country: { country }</p>
      <p onClick = { click }>
        <StyledBtn>Delete Me</StyledBtn>
      </p>

    </div>
  )
}

export default userOutput;