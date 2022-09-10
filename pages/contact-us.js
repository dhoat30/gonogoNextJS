import React from 'react'
import getCPT from '../util/get-cpt'
import SEO from '../Components/SEO'
import HazardsRisks from '../Components/Pages/HomePage/HazardsRisks'
import getPage from '../util/get-page'
import ContactUs from '../Components/Pages/ContactUs'

function contactUs({pageData, featuresData, testimonialsData}) {
  console.log(pageData)
  const seo = {
    title: pageData[0].yoast_head_json.title && pageData[0].yoast_head_json.title,
    description: pageData[0].yoast_head_json.description && pageData[0].yoast_head_json.description,
    imageSrc: pageData[0].yoast_head_json.og_image &&  pageData[0].yoast_head_json.og_image[0].url
  }
  return (
    <React.Fragment> 
    {Object.keys(seo).length !== 0
    && 
    <SEO
    seo={seo}
  /> 
    }
    <ContactUs
    pageData={pageData[0]}
    testimonialsData={testimonialsData}
    /> 

    </React.Fragment>     

  )
}

export default contactUs
export async function getStaticProps(context) {
  // get home page data using category from hero images 
  const pageData = await getPage("contact-us")
  const featuresData = await getCPT("features")
  const testimonialsData = await getCPT("testimonials")
  return {
    props: {
     pageData: pageData, 
     featuresData: featuresData, 
     testimonialsData: testimonialsData
    },
    revalidate: 8600
  }
}