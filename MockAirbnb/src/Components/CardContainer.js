import Card from "./Card"
import data from "../Data/data"

function CardContainer() {

  const cards = data.map(card => {
    return (
      <Card 
        title={card.title}
        imgLink={`/assets/images/${card.coverImg}`}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        location={card.location}
        description={card.description}
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