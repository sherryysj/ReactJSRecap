// Journal Card Container

import Journal from "./Journal"
import data from "../Data/data"

function Journals() {

  const journals = data.map(journal => {
      return (
          <Journal 
            key={journal.id}
            {...journal}
          />
        )
  }) 

  return (
    <div className="journals">
        {journals}
    </div>
  )
}

export default Journals