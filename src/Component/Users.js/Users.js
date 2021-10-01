import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './User.css';

const Users = (props) => {
  const {name, phone, address, id} = props.user;
  const history = useHistory();
  const url =`/user/${id}`;
  const handleUserClick = () => {
    history.push(`/user/${id}`)
  }
  return (
    <div className="user-item">
      <h4>Name: {name}</h4>
      <p><b>Mobile Number:</b> {phone}</p>
      <p><b>City:</b> {address.city}</p>
      {/* <Link to={url}>Visit Me</Link><br/>
      <Link to={url}>
      <button>Visit Me</button>
      </Link><br/> */}
      <button style={{backgroundColor:"purple",color:'white',padding:'4px 10px', borderRadius:'6px', cursor:'pointer'}} onClick={handleUserClick}>Visit Me</button>
    </div>
  );
};

export default Users;