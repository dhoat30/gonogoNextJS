import Head from 'next/head'
import getPage from '../util/get-page'
import styles from '../styles/Home.module.css'

export default function Home({homePageData}) {
  console.log(homePageData)
  return (
    <div >
      

     

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