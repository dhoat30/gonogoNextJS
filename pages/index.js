import React, {useEffect} from 'react'
import HomePage from '../Components/Pages/HomePage/HomePage'
import SEO from '../Components/SEO'
import getContact from '../util/get-contact'
import getCPT from '../util/get-cpt'
import getMenu from '../util/get-menu'
import getPage from '../util/get-page'
import getSingleCpt from '../util/get-single-cpt'
export default function Home({homePageData, featuresData, testimonialsData, contactData, stillThinkingData, allModulesData}) {

  const seo = {
    title: homePageData[0].yoast_head_json.title,
    description: homePageData[0].yoast_head_json.description,
    imageSrc: homePageData[0].yoast_head_json.og_image > 0 &&  homePageData[0].yoast_head_json.og_image[0].url
  }
  return (
  <React.Fragment> 
    <SEO
      seo={seo}
    /> 
      <HomePage 
      allModulesData={allModulesData}
      stillThinkingData={stillThinkingData[0]}
      homePageData={homePageData} featuresData={featuresData} testimonialsData={testimonialsData} />
      </React.Fragment>     
  )
}

export async function getStaticProps(context) {
  // get home page data using category from hero images 
  const homePageData = await getPage('home-page')
  const featuresData = await getCPT("features")
  const testimonialsData = await getCPT("testimonials")
  const stillThinkingData = await getSingleCpt('videos', "still-thinking")
  const allModulesData = await getCPT('modules')
  const contactData = await getContact();
  return {
    props: {
     homePageData: homePageData, 
     featuresData: featuresData, 
     testimonialsData: testimonialsData, 
     contactData: contactData, 
     stillThinkingData: stillThinkingData,
     allModulesData: allModulesData
    },
    revalidate: 86400
  }
}