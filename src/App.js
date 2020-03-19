import React, { useState } from 'react';
import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';



const App = () => {
  const [userNameState, setUserNameStates] = useState({
    users: [
      {userName: 'Mehmet', surName: null, dob: null, country: null},
      {userName: 'Deniz', surName: null, dob: null, country: null},
      {userName: 'Figen', surName: null, dob: null, country: null}
    ]

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

  const changeNameHandler = (event) => {
    setUserNameStates({
      users: [
        {userName: 'Mehmet', surName: 'Ucar', dob: '29/03/1988', country: 'The United Kingdom'},
        {userName: event.target.value, surName: 'Saritas', dob: '23/05/1997', country: 'Austria'},
        {userName: 'Figen', surName: 'Ucar', dob: '27/11/1971', country: 'Austria'}
      ]
    })
  }

  const buttonStyle = {
    backgroundColor: 'black',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px'
  }
  return (

    <div className = 'App'>
      <h1>Users</h1>
      <button
        style = {buttonStyle}
        onClick = { showUsersDetailsHandler }>Show Details</button>
      <hr></hr>
      <UserInput changed = {changeNameHandler}
                 currentName = {userNameState.users[1].userName}/>
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
  );
}

export default App;
