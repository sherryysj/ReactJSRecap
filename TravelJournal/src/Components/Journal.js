import React from 'react'

function Journal(props) {
  return (
    <div className="journal">
        <img src="assets/images/Mount Fuji.jpg"></img>
        <div className="journal-details">
            <div className="location">
                <i class="fa fa-map-marker"></i>
                <p>Japan</p>
                <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8">View on Google Maps</a>
            </div>
            <h1>Mount Fuji</h1>
            <h4>12 Jan, 2021 - 24 Jan, 2021</h4>
            <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
        </div>
    </div>
  )
}

export default Journal