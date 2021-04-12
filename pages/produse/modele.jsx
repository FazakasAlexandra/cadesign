import NavSteps from '../../components/NavSteps'
import OrderStepCard from '../../components/OrderStepCard'
import PricesTotal from '../../components/PricesTotal'
import ModelCard from '../../components/ModelCard'
import models from '../../db/models.json' 

export default function Modele() {
  
  const getModels = () => {
    return models.map((model) => {
      return <ModelCard
      cardModel = {model}
      />
    })
  }
  return (
    <>
      <div className="cards-container" id="produse">
        {getModels()}
      </div>
    </>
  )
}