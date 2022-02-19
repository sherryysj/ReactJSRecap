import React from 'react'
import Photo from "../Images/photo-grid.png"

function Hero() {
  return (
    <section className="hero">
        <img src={Photo} alt="Grid" />
        <h1>Online Experience</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}

export default Hero