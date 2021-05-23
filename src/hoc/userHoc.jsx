import React from 'react';

const userHoc = (WrappedComponent, WrappedComponent2, arg1) => {


  return (props) => (
    <div>
      <WrappedComponent {...props} />
      <WrappedComponent2 {...props} />
      <h2>{arg1}</h2>
    </div>
  )
}

export default userHoc;