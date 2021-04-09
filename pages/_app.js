import '../public/styles/style.css'
import Navbar from '../components/Navbar.jsx'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (<>
    <Navbar />
    <Component {...pageProps} />
  </>
  )

}

export default MyApp
