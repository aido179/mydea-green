import React from 'react'

function Unauthenticated(props) {
  return (<div>
    <h1>Welcome!</h1>
    <p>An Ethereum account has not been found.</p>
    <button onClick={props.onButtonClicked}>Get Started</button>
  </div>);
}

export default Unauthenticated;
