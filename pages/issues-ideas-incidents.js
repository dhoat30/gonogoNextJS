import React from 'react'
import getSingleCpt from '../util/get-single-cpt'
import getCPT from '../util/get-cpt'
import IssuesIdeasIncidents from '../Components/Pages/HomePage/IssuesIdeasIncidents'
import SEO from '../Components/SEO'

function issuesIdeasIncidents({moduleData}) {
  const seo = {
    title: moduleData[0].yoast_head_json.title,
    description: moduleData[0].yoast_head_json.description,
    imageSrc: moduleData[0].yoast_head_json.og_image.length > 0 &&  moduleData[0].yoast_head_json.og_image[0].url
  }
  return (
    <React.Fragment> 
  <SEO
    seo={seo}
  /> 
    <IssuesIdeasIncidents moduleData={moduleData[0]} />
    </React.Fragment>     

  )
}

export default issuesIdeasIncidents
export async function getStaticProps(context) {
  // get home page data using category from hero images 
  const moduleData = await getSingleCpt('modules', 'issues-ideas-incidents')
  const featuresData = await getCPT("features")
  const testimonialsData = await getCPT("testimonials")
  return {
    props: {
     moduleData: moduleData, 
     featuresData: featuresData, 
     testimonialsData: testimonialsData
    },
    revalidate: 8600
  }
}