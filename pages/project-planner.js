import React from 'react'
import getSingleCpt from '../util/get-single-cpt'
import getCPT from '../util/get-cpt'
import ProjectPlanner from '../Components/Pages/HomePage/ProjectPlanner'
import SEO from '../Components/SEO'

function projectPlanner({moduleData, featuresData}) {
  console.log(moduleData)
  // const seo = {
  //   title: moduleData[0].yoast_head_json.title && moduleData[0].yoast_head_json.title,
  //   description: moduleData[0].yoast_head_json.description && moduleData[0].yoast_head_json.description,
  //   imageSrc: moduleData[0].yoast_head_json.og_image &&  moduleData[0].yoast_head_json.og_image[0].url
  // }
  return (
    <React.Fragment> 
    {/* {Object.keys(seo).length !== 0
    && 
    <SEO
    seo={seo}
  /> 
    } */}

  <ProjectPlanner 
  featuresData={featuresData}
  moduleData={moduleData[0]} /> 
    </React.Fragment>     

  )
}

export default projectPlanner
export async function getStaticProps(context) {
  // get home page data using category from hero images 
  const moduleData = await getSingleCpt('modules', 'project-planner')
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