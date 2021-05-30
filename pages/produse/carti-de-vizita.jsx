import MenuCard from '../../components/MenuCard'
import models from '../../db/vizitCards.json' 
import Layout from '../../components/Layout'

export default function Modele() {
  
  const getModels = () => {
    return models.map((model,idx) => {
      return <MenuCard
      key={idx}
      cardMenu={model}
      type="visitcards"
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