import '../public/styles/style.css'
import Navbar from '../components/Navbar.jsx'
import '@fortawesome/fontawesome-svg-core/styles.css';
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
