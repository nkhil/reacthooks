import React from 'react';
// import custom hook `useFetch` below..
import useFetch from './customHooks/DataFetcher'

export default function DataLoader() {
  // Using the custom hook `useFetch`
  const data = useFetch('https://jsonplaceholder.typicode.com/users')

  return (
    <div>
      {console.log(data)}
      <ul>
        {data.map(el => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
}