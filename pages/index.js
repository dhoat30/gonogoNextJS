import React from 'react'
import HomePage from '../Components/Pages/HomePage/HomePage'
import SEO from '../Components/SEO'
import getCPT from '../util/get-cpt'
import getPage from '../util/get-page'

export default function Home({homePageData, featuresData, testimonialsData}) {
  const seo = {
    title: homePageData[0].yoast_head_json.title,
    description: homePageData[0].yoast_head_json.description,
    imageSrc: homePageData[0].yoast_head_json.og_image.length > 0 &&  homePageData[0].yoast_head_json.og_image[0].url
  }
  console.log(homePageData)
  return (
    
<React.Fragment> 
  <SEO
    seo={seo}
  /> 
      <HomePage homePageData={homePageData} featuresData={featuresData} testimonialsData={testimonialsData} />
      </React.Fragment>     
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