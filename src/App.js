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
              {userNameState.users.map(user => {
                return <UserOutput
                          userName = {user.userName}
                          surName = {user.surName}
                          dob = {user.dob}
                          country = {user.country} />
              })}


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
