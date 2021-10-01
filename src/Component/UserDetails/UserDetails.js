import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const UserDetails = () => {
  const {userId} = useParams();
  const [user, setUser] = useState({});
  const {username, email, website, company} = user;
  const history = useHistory();
  useEffect(()=> {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res => res.json())
    .then(data => setUser(data));
  }, []);
  const handleClick = () => {
    history.push(`/about`)
  }
  return (
    <div style={{float:"right", margin:"20px 50% 0 0",border:'1px solid gray',padding:'20px'}}>
      <h3>User No: {userId}</h3>
      <h5>User Name: <span style={{color:"darkblue"}}>{username}</span></h5>
      <h5>Email: <i>{email}</i></h5>
      <h5>Website Name: <u style={{color:"blue"}}>{website}</u></h5>
      <h5>Work in <span style={{color:"goldenrod"}}>{company?.name}</span></h5>
      <button style={{backgroundColor:"purple",color:'white',padding:'4px 10px', borderRadius:'6px', cursor:'pointer'}} onClick={handleClick}>See all user</button>
    </div>
  );
};

export default UserDetails;