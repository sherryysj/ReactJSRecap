import Contact from './Contact';
import Detail from './Detail';
import Header from './Header';

function Card() {
  return (
    <div className='card'>
        <Header />
        <Contact />
        <Detail />
    </div>
  )
}

export default Card;