import React,{useContext} from 'react'
import HomePage from '../Components/Pages/HomePage/HomePage'
import SEO from '../Components/SEO'
import getContact from '../util/get-contact'
import getCPT from '../util/get-cpt'
import getPage from '../util/get-page'
import ContactInfoContext from '../Store/contact-info-context'
export default function Home({homePageData, featuresData, testimonialsData, contactData}) {
  console.log(contactData.url)
  const contactInfoCtx = useContext(ContactInfoContext)
  contactInfoCtx.getContactData("hello")
  const seo = {
    title: homePageData[0].yoast_head_json.title,
    description: homePageData[0].yoast_head_json.description,
    imageSrc: homePageData[0].yoast_head_json.og_image.length > 0 &&  homePageData[0].yoast_head_json.og_image[0].url
  }
  return (
    
<React.Fragment> 
  <SEO
    seo={seo}
  /> 
      <HomePage homePageData={homePageData} featuresData={featuresData} testimonialsData={testimonialsData} />
      </React.Fragment>     
  )
}

export async function getStaticProps(context) {
  // get home page data using category from hero images 
  const homePageData = await getPage('home-page')
  const featuresData = await getCPT("features")
  const testimonialsData = await getCPT("testimonials")
  const contactData = await getContact();
  return {
    props: {
     homePageData: homePageData, 
     featuresData: featuresData, 
     testimonialsData: testimonialsData, 
     contactData: contactData
    },
    revalidate: 8600
  }
}