import React from 'react'
import getSingleCpt from '../../util/get-single-cpt'
import getCPT from '../../util/get-cpt'
import Module from '../../Components/Pages/HomePage/Modules/Module'
import getContact from '../../util/get-contact'

function modules({moduleData, featuresData}) {
  console.log(moduleData)
  return (
    // <h1>hello</h1>
    <Module
    featuresData={featuresData}
    moduleData={moduleData[0]}
    /> 
  
  )
}

export default modules
export async function getServerSideProps(context) {
  const {params} = context
  const slug = params.slug
  // get home page data using category from hero images 
  const moduleData = await getSingleCpt('modules', slug)
  const featuresData = await getCPT("features")
  const contactData = await getContact();
  return {
    props: {
     moduleData: moduleData, 
     featuresData: featuresData, 
     contactData: contactData
    }
  }
}
