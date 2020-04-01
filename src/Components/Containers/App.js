import React, { useState } from 'react';
import './App.css';
import Users from '../Users/Users'
import Cockpit from '../Cockpit'
import StyleBtn1 from '../StyleBtn1'





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
            <StyleBtn1
                onClick = { showUsersDetailsHandler }> Show Users Details
            </StyleBtn1>

             <StyleBtn1
                onClick = { hideUsersDetailsHandler }> Hide Users Details
              </StyleBtn1>
              <Users
                users = {userNameState.users}
                deleted = {deleteUsersHandler}/>
            <hr></hr>
      </div>
    )

  }



  return (

    <div className = 'App'>
      <Cockpit
      clicked = {toggleUsersHandler}
      status = { userNameState.users.length} />
      {users}


    </div>
  );
}

export default App;
