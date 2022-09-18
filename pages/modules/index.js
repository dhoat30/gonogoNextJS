import React, {useEffect} from 'react'
import BlogArchive from '../../Components/Pages/Blogs/BlogArchive'
import ModuleArchive from '../../Components/Pages/HomePage/Modules/ModuleArchive'
import SEO from '../../Components/SEO'
import getContact from '../../util/get-contact'
import getCPT from '../../util/get-cpt'
import getPage from '../../util/get-page'
import getSingleCpt from '../../util/get-single-cpt'
export default function Home({pageData, featuresData, testimonialsData, contactData, stillThinkingData, allBlogData, allModulesData}) {
  let reverseModulesData = [...allModulesData].reverse()

  const seo = {
    title: pageData[0].yoast_head_json.title,
    description: pageData[0].yoast_head_json.description,
    imageSrc: pageData[0].yoast_head_json.og_image &&  pageData[0].yoast_head_json.og_image[0].url
  }
  return (
  <React.Fragment> 
    <SEO
      seo={seo}
    /> 
    <ModuleArchive
    testimonialsData={testimonialsData}
      allModulesData={reverseModulesData}
      pageData={pageData[0]}
    /> 
    </React.Fragment> 
  )
}

export async function getStaticProps(context) {
  // get home page data using category from hero images 
  const pageData = await getPage('modules-page')
  const featuresData = await getCPT("features")
  const testimonialsData = await getCPT("testimonials")
  const stillThinkingData = await getSingleCpt('videos', "still-thinking")
  const allModulesData = await getCPT('modules')
  const contactData = await getContact();
  const allBlogData = await getCPT('posts')
  console.log(allModulesData )
  return {
    props: {
     pageData: pageData, 
     featuresData: featuresData, 
     testimonialsData: testimonialsData, 
     contactData: contactData, 
     stillThinkingData: stillThinkingData,
     allModulesData: allModulesData, 
     allBlogData: allBlogData
    },
    revalidate: 86400
  }
}