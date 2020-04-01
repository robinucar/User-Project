import React from 'react';
import styled from 'styled-components';

const StyledBtn1 = styled.button`
background-color: white;
color: black;
font: inherit;
border: 1px solid blue;
padding: 8px;
margin: 10px;
cursor: pointer;
border: 1px solid black;
&:focus {outline:0;};
&:hover {
  background-color: black;
  color: white;
}
`;

const StyledP = styled.p`
color: ${props => props.alt > 0 ? 'black' : 'red' };
font-weight: ${props => props.alt > 0 ? 'inherit' : '900' };
background-color: ${props => props.alt > 0 ? 'inherit' : 'black' };
width: ${props => props.alt > 0 ? 'inherit' : '290px' };
margin: ${props => props.alt > 0 ? 'inherit' : 'auto' };
padding: ${props => props.alt > 0 ? 'inherit' : '10px' };
`;

const Cockpit = (props) => {
  const usersLength = `There are ${ props.status } users...`
  return (
    <div>
      <h1>Users</h1>
      <StyledP alt = { props.status }>{usersLength}</StyledP>
      <StyledBtn1
        onClick = { props.clicked }>Show Users
      </StyledBtn1>
      <hr></hr>
    </div>
  )
}

export default Cockpit
