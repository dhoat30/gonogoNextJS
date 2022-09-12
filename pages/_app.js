import '../styles/globals.css'
// import '../styles/home.module.css'
import { VideoContextProvider } from '../Store/video-context'
import Layout from '../Components/Layout'
function MyApp({ Component, pageProps }) {
  return (
    <VideoContextProvider>
 <Layout>
    <Component {...pageProps} />
  </Layout>
    </VideoContextProvider>
   
  )
}

export default MyApp
