import Head from 'next/head'
import HomePage from '../Components/Pages/HomePage/HomePage'
import getCPT from '../util/get-cpt'
import getPage from '../util/get-page'

export default function Home({homePageData, featuresData, testimonialsData}) {
  return (
    <div >
      <HomePage homePageData={homePageData} featuresData={featuresData} testimonialsData={testimonialsData} />

    
    </div>
  )
}

export async function getStaticProps(context) {
  // get home page data using category from hero images 
  const homePageData = await getPage('home-page')
  const featuresData = await getCPT("features")
  const testimonialsData = await getCPT("testimonials")
  return {
    props: {
     homePageData: homePageData, 
     featuresData: featuresData, 
     testimonialsData: testimonialsData
    },
    revalidate: 8600
  }
}