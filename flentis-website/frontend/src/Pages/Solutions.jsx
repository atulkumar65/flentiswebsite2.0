import React from 'react'
import { useParams } from 'react-router-dom'


/**
 * This function returns a React component for the Solutions page.
 * @returns {React.Component} The Solutions component.
 */
const Solutions = () => {
  const {id} = useParams();
  return (
    <div>
      <p>Solutions page will be rendered here</p>
      {/* <p>{id}</p> */}
    </div>
  )
}

export default Solutions
