import React, { useState, Fragment } from 'react';

function Example() {
  const [buttonText, setButtonText] = useState('Click me!');

  function handleButtonClick() {
    return setButtonText('clicked')
  }
  return (
    <div>
      <button onClick={ handleButtonClick }>{buttonText}</button>
    </div>
  )
  
}

export default Example;