import React from 'react'
import getSingleCpt from '../../util/get-single-cpt'
import getCPT from '../../util/get-cpt'
import Module from '../../Components/Pages/HomePage/Modules/Module'
import getContact from '../../util/get-contact'
import SEO from '../../Components/SEO'
function modules({moduleData, featuresData, stillThinkingData}) {
  const seo = {
    title: moduleData[0].yoast_head_json.title,
    description: moduleData[0].yoast_head_json.description,
    imageSrc: moduleData[0].yoast_head_json.og_image &&  homePageData[0].yoast_head_json.og_image[0].url
  }
  return (
    <>
    <SEO
      seo={seo}
    /> 
    <Module
    featuresData={featuresData}
    moduleData={moduleData[0]}
    stillThinkingData={stillThinkingData[0]}
    /> 
    </>

  )
}

export default modules
export async function getStaticProps(context) {
  const {params} = context
  const slug = params.pid
  // get home page data using category from hero images 
  const moduleData = await getSingleCpt('modules', slug)
  const featuresData = await getCPT("features")
  const contactData = await getContact();
  const stillThinkingData = await getSingleCpt('videos', "still-thinking")
  const allModulesData = await getCPT('modules')
  return {
    props: {
     moduleData: moduleData, 
     featuresData: featuresData, 
     contactData: contactData,
     stillThinkingData: stillThinkingData, 
     allModulesData: allModulesData

    },
    revalidate: 604800
  }
}
export async function getStaticPaths(){ 
     const allModulesData = await getCPT('modules')
     const params = allModulesData.map((item)=>({ params: {pid: item.slug} }))

     return{ 
      paths: params, 
      fallback: false 
     };

}