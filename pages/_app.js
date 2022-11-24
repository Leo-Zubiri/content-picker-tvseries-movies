import '../styles/globals.css'

import {ContenidoProvider} from '../context/ContenidoProvider'

function MyApp({ Component, pageProps }) {
  return  <ContenidoProvider>
      <Component {...pageProps} />
  </ContenidoProvider>
  
}

export default MyApp
