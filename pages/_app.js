import '../styles/globals.css'
// import '../styles/home.module.css'

import Layout from '../Components/Layout'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
