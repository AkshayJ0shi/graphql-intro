import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <p>NotFound</p>
        <Link to={"/"}>Back to Home</Link>
    </div>
  )
}

export default NotFound