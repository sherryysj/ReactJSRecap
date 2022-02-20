function Card(props) {
  return (
    <div className='card'>
        <img src={props.imgLink}/>
        <div className="card-detail">
          <div className='card-comment'>
              <i class='fa fa-star'></i>
              <p>{props.stars}<span>({props.commentsAmount}) • {props.country}</span></p>
          </div>
          <p className='card-lesson'>{props.lesson}</p>
          <div className='card-price'>
              <p>From ${props.price}<span> / {props.priceType}</span></p>
          </div>
        </div>
    </div>
  )
}

export default Card