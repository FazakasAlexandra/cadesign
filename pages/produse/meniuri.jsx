import MenuCard from '../../components/MenuCard'
import menus from '../../db/menus.json'
import Layout from '../../components/Layout'

export default function Meniuri() {

  const getMenus = () => {
    return menus.map((menu, idx) => {
      return <MenuCard
        key={idx}
        cardMenu={menu}
        type="menus"
      />
    })
  }

  return (
    <Layout>
      <div className="cards-container" id="produse">
        {getMenus()}
      </div>
    </Layout>
  )
}