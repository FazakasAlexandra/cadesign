import NavSteps from '../../components/NavSteps'
import OrderStepCard from '../../components/OrderStepCard'
import PricesTotal from '../../components/PricesTotal'
import ModelCard from '../../components/ModelCard'
import models from '../../db/models.json' 
import Layout from '../../components/Layout'

export default function Modele() {
  
  const getModels = () => {
    return models.map((model,idx) => {
      return <ModelCard
      key={idx}
      cardModel = {model}
      />
    })
  }
  return (
    <Layout>
      <div className="cards-container" id="produse">
        {getModels()}
      </div>
    </Layout>
  )
}