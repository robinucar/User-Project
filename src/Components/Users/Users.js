import React from 'react';
import UserOutput from '../Users/UserOutput'




const users = (props) => props.users.map((user, index) => {
  const { deleted }= props
    return <UserOutput
              click = { () => deleted(index)}
              userName = {user.userName}
              surName = {user.surName}
              dob = {user.dob}
              country = {user.country}
              key = {user.id}
              />
  })


export default users;