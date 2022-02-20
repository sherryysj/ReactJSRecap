import Card from "./Card"

function CardContainer() {
  return (
    <div className="card-container">
        <Card 
          imgLink="/assets/images/katie-zaferes.png"
          stars="5.0"
          commentsAmount={16}
          country="USA"
          lesson="LESSON NAME"
          price={150}
          priceType="hour"
        />
    </div>
  )
}

export default CardContainer