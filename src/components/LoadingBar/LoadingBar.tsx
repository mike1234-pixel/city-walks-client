import React from "react"
import "./LoadingBar.css"

const LoadingBar: React.FC = () => {
  return (
    <div className='loading-bar__container'>
      <p>Loading...</p>
      <div className='loading-bar'></div>
    </div>
  )
}

export default LoadingBar
