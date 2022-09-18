import React from 'react'
import getCPT from '../util/get-cpt'
import SEO from '../Components/SEO'
import getPage from '../util/get-page'
import ContactUs from '../Components/Pages/ContactUs'
import getContact from '../util/get-contact'

function contactUs({pageData, featuresData, testimonialsData, contactData}) {
  console.log(pageData)

  const seo = {
    title: pageData[0].yoast_head_json.title,
    description: pageData[0].yoast_head_json.description,
    imageSrc: pageData[0].yoast_head_json.og_image > 0 &&  pageData[0].yoast_head_json.og_image[0].url
  }
  return (
    <React.Fragment> 
     <SEO
      seo={seo}
    /> 
    <ContactUs
    pageData={pageData[0]}
    contactData={contactData}
    testimonialsData={testimonialsData}
    /> 

    </React.Fragment>     

  )
}

export default contactUs
export async function getServerSideProps(context) {
  // get home page data using category from hero images 
  const pageData = await getPage("contact-us")
  const featuresData = await getCPT("features")
  const testimonialsData = await getCPT("testimonials")
  const allModulesData = await getCPT('modules')
  const contactData = await getContact();

  return {
    props: {
     pageData: pageData, 
     featuresData: featuresData, 
     testimonialsData: testimonialsData,     
     allModulesData: allModulesData,
     contactData: contactData, 

    },
    // revalidate: 86400
  }
}