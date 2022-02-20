import Card from "./Card"

function CardContainer() {
  return (
    <div>
        <Card 
          imgLink="/assets/images/photo-grid.png"
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