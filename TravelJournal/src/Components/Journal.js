import React from 'react'

function Journal(props) {
  return (
    <div className="journal">
        <img src={props.imageUrl} alt="lanscape"></img>
        <div className="journal-details">
            <div className="location">
                <i class="fa fa-map-marker"></i>
                <p>{props.location}</p>
                <a href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h1>{props.title}</h1>
            <h4>{props.startDate} - {props.endDate}</h4>
            <p>{props.description}</p>
        </div>
    </div>
  )
}

export default Journal