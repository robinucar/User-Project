import React, { useState } from 'react';
import './App.css';

import UserOutput from './Components/UserOutput';



const App = () => {
  const [userNameState, setUserNameStates] = useState({
    users: [
      {userName: 'Mehmet', surName: null, dob: null, country: null},
      {userName: 'Deniz', surName: null, dob: null, country: null},
      {userName: 'Figen', surName: null, dob: null, country: null}
    ],
  })

  const  [showUsersState, setShowUsersState] = useState({
    showUsers:false
  })
  console.log(userNameState)
  const showUsersDetailsHandler = () => {
    setUserNameStates({
      users: [
        {userName: 'Mehmet', surName: 'Ucar', dob: '29/03/1988', country: 'The United Kingdom'},
        {userName: 'Deniz', surName: 'Saritas', dob: '23/05/1997', country: 'Austria'},
        {userName: 'Figen', surName: 'Ucar', dob: '27/11/1971', country: 'Austria'}
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

  const buttonStyle = {
    backgroundColor: 'black',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    margin: '10px'
  }

  let users = null;
  if(showUsersState.showUsers){
    users = (
    <div>
            <button
              style = {buttonStyle}
              onClick = {showUsersDetailsHandler}> Show Users Details </button>
              <button
              style = {buttonStyle}
              onClick = {hideUsersDetailsHandler}> Hide Users Details </button>
            <UserOutput userName = {userNameState.users[0].userName}
                        surName = {userNameState.users[0].surName}
                        dob = {userNameState.users[0].dob}
                        country = {userNameState.users[0].country}
                        />
            <hr></hr>
                        <UserOutput userName = {userNameState.users[1].userName}
                        surName = {userNameState.users[1].surName}
                        dob = {userNameState.users[1].dob}
                        country = {userNameState.users[1].country}

                        />
            <hr></hr>
                        <UserOutput userName = {userNameState.users[2].userName}
                        surName = {userNameState.users[2].surName}
                        dob = {userNameState.users[2].dob}
                        country = {userNameState.users[2].country}
                        />

            <hr></hr>
        </div>
    )
  }


  return (

    <div className = 'App'>
      <h1>Users</h1>
      <button
        style = {buttonStyle}
        onClick = { toggleUsersHandler }>Show Users</button>
      <hr></hr>
      {users}


    </div>
  );
}

export default App;
