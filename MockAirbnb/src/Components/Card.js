import Image from "../Images/airbnb-logo.png"

function Card() {
  return (
    <div className='card'>
        <img src={Image}/>
        <div className='card-comment'>
            <i class='fa fa-star'></i>
            <p>5.0<span>(6) • USA</span></p>
        </div>
        <p className='card-lesson'>lesson name</p>
        <div className='card-price'>
            <p>From $136<span> / hour</span></p>
        </div>
        
        
    </div>
  )
}

export default Card