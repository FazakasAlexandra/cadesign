import '../public/styles/style.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'react-medium-image-zoom/dist/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import { LanguageProvider } from '../contexts/LanguageContext';
import posthog from 'posthog-js'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if (!window.location.href.includes('localhost')) {
      posthog.init('phc_yuGermCJ4ar0OalfTJqjn0YYvqEXKM4ZwU3vAAj5HXR', { api_host: 'https://app.posthog.com' })
      posthog.capture('visitour', { property: '1' })
    }
  }, [])

  return (<LanguageProvider>
    <Component {...pageProps} />
  </LanguageProvider>
  )

}

export default MyApp
