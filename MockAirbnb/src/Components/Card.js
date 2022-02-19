import Image from "../Images/airbnb-logo.png"

function Card() {
  return (
    <div className='card'>
        <img src={Image}/>
        <div className='card-comment'>
            <i class='fa fa-star'></i>
            <p>5.0(6) USA</p>
        </div>
        <p className='card-lesson'>lesson name</p>
        <div className='card-price'>
            <p className='price-amount'>From $136</p>
            <p className='price-type'> / hour</p>
        </div>
        
        
    </div>
  )
}

export default Card