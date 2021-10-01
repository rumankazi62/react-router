import React, { useEffect, useState } from 'react';
import Users from '../Users.js/Users';
import './About.css';

const About = () => {
  const [users, setUsers] = useState([])
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div className='users-item'>
      {
        users.map(user => <Users key={user.id} user={user}></Users>)
      }
    </div>
  );
};

export default About;