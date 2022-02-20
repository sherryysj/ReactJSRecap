import Card from "./Card"
import data from "../Data/data"

function CardContainer() {

  const cards = data.map(card => {
    return (
      <Card 
        imgLink={`/assets/images/${card.coverImg}`}
        stars={card.stats.rating}
        commentsAmount={card.stats.reviewCount}
        country={card.location}
        lesson={card.description}
        price={card.price}
        priceType={card.priceType}
      />
    )
  })

  return (
    <div className="card-container">
      {cards}
    </div>
  )
}

export default CardContainer