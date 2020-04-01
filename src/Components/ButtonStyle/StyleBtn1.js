
import styled from 'styled-components'

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
export default StyledBtn1