import React from 'react'
import getCPT from '../util/get-cpt'
import SEO from '../Components/SEO'
import getPage from '../util/get-page'
import BookADemo from '../Components/Pages/BookADemo'

function bookADemo({pageData, featuresData, testimonialsData}) {
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
    <BookADemo
    pageData={pageData[0]}
    testimonialsData={testimonialsData}
    /> 

    </React.Fragment>     

  )
}

export default bookADemo
export async function getStaticProps(context) {
  // get home page data using category from hero images 
  const pageData = await getPage("book-a-demo")
  const featuresData = await getCPT("features")
  const testimonialsData = await getCPT("testimonials")
  const allModulesData = await getCPT('modules')
  
  return {
    props: {
     pageData: pageData, 
     featuresData: featuresData, 
     testimonialsData: testimonialsData,
     allModulesData: allModulesData

    },
    revalidate: 8600
  }
}