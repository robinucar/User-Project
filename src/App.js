import React, { useState } from 'react';
import './App.css';
import UserOutput from './Components/UserOutput';
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

const App = () => {
  const [userNameState, setUserNameStates] = useState({
    users: [
      { id: 'first', userName: 'Mehmet', surName: null, dob: null, country: null},
      {id: 'second', userName: 'Deniz', surName: null, dob: null, country: null},
      {id: 'third', userName: 'Figen', surName: null, dob: null, country: null}
    ],
  })

  const  [showUsersState, setShowUsersState] = useState({
    showUsers:false
  })

  const showUsersDetailsHandler = () => {
    setUserNameStates({
      users: [
        {id: 'fourth', userName: 'Mehmet', surName: 'Ucar', dob: '29/03/1988', country: 'The United Kingdom'},
        {id: 'fifth',userName: 'Deniz', surName: 'Saritas', dob: '23/05/1997', country: 'Austria'},
        {id: 'sixth',userName: 'Figen', surName: 'Ucar', dob: '27/11/1971', country: 'Austria'}
      ]
    })
  }


  const toggleUsersHandler = () => {
    const doesShow = showUsersState.showUsers;
    setShowUsersState({
      showUsers: !doesShow
    });
  }

  const hideUsersDetailsHandler = () => {
    setUserNameStates({
      users: [
        {userName: 'Mehmet', surName: null, dob: null, country: null},
        {userName: 'Deniz', surName: null, dob: null, country: null},
        {userName: 'Figen', surName: null, dob: null, country: null}
      ],
    })

  }

  const deleteUsersHandler = (userIndex) => {
    const users = [...userNameState.users];
    users.splice(userIndex, 1);
    setUserNameStates({users: users});

  }


  let users = null;
  if(showUsersState.showUsers){
    users = (
      <div>
            <StyledBtn1
                onClick = { showUsersDetailsHandler }> Show Users Details
            </StyledBtn1>

             <StyledBtn1
                onClick = { hideUsersDetailsHandler }> Hide Users Details
              </StyledBtn1>
              {userNameState.users.map((user, index) => {
                return <UserOutput
                          click = { () => deleteUsersHandler(index)}
                          userName = {user.userName}
                          surName = {user.surName}
                          dob = {user.dob}
                          country = {user.country}
                          key = {user.id}
                          ></UserOutput>
              })}


            <hr></hr>
      </div>
    )
    //buttonStyle.backgroundColor = 'green'
  }

  const classes = [];
  if(userNameState.users.length > 0){
    classes.push('bold')
  }

  if(userNameState.users.length <= 1){
    classes.push('red')
  }
  const usersLength = `There are ${ userNameState.users.length } users...`
  return (

    <div className = 'App'>
      <h1>Users</h1>
      <p className={classes.join(' ')}>{usersLength}</p>
      <StyledBtn1
        onClick = { toggleUsersHandler }>Show Users
      </StyledBtn1>
      <hr></hr>
      {users}


    </div>
  );
}

export default App;
