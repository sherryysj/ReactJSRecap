function Card(props) {
  return (
    <div className='card'>
        <img src={props.imgLink} alt="profile"/>
        <h4>{props.title}</h4>
        <div className="card-detail">
          <div className='card-review'>
              <i class='fa fa-star'></i>
              <p>{props.rating}<span>({props.reviewCount}) • {props.location}</span></p>
          </div>
          <p className='card-description'>{props.description}</p>
          <div className='card-price'>
              <p>From ${props.price}<span> / {props.priceType}</span></p>
          </div>
        </div>
    </div>
  )
}

export default Card