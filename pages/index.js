import Head from 'next/head'
import HomePage from '../Components/Pages/HomePage/HomePage'
import getPage from '../util/get-page'

export default function Home({homePageData}) {
  return (
    <div >
      <HomePage homePageData={homePageData} />

    
    </div>
  )
}

export async function getStaticProps(context) {
  // get home page data using category from hero images 
  const homePageData = await getPage('home-page')
  return {
    props: {
     homePageData: homePageData
    },
    revalidate: 8600
  }


}