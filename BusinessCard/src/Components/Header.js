import React from 'react'
import Photo from '../Images/photo.jpg'

function Header() {
  return (
    <div>
        <img src={Photo} alt="profile" className='photo'/>
        <h2 className='card-name'>Sherry Yang</h2>
        <p className='card-title'>Software Engineer</p>
        <p className='card-work'>Web Developing</p>
    </div>
  )
}

export default Header