import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Post() {

  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await axios
      .post('http://localhost:3000/auth/login', {
          email: 'jake@thesnake.com',
          password: 'jakethesnake1'
      })
      setData(data);
    }
    fetchData();
  }, []); 

  return (
    <div>
      { console.log('ze dataaa', data) }
      <h1>Data test</h1>
    </div>
  )
  
}

export default Post;