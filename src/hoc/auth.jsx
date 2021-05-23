import React from 'react';

const Auth = (props) => {
  const pass = 'password';

  if (pass !== 'password') {
    return <h3>You are not authrized</h3>
  }
  else {
    return props.children
  }
}

export default Auth;