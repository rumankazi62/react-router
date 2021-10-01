import React, { useEffect, useState } from 'react';

const Home = () => {
  const[posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])
  return (
    <div>
      <h1>This is routing practice project.</h1>
      <h2>{posts.title}</h2>
      <p>{posts.body}</p>
    </div>
  );
};

export default Home;