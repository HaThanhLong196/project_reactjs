import React from 'react'

function DemoFunctionChild(props) {
    const {children}=props;
  return (
    <div>{children()}</div>
  )
}

export default DemoFunctionChild