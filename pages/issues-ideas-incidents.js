import React from 'react'
import getSingleCpt from '../util/get-single-cpt'
import getCPT from '../util/get-cpt'
import IssuesIdeasIncidents from '../Components/Pages/HomePage/IssuesIdeasIncidents'

function issuesIdeasIncidents({moduleData}) {
  return (
    <IssuesIdeasIncidents moduleData={moduleData[0]} />
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