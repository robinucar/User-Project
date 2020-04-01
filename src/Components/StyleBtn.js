import styled from 'styled-components';

const StyleBtn = styled.button`
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

export default StyleBtn;