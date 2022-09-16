import React from 'react'
import getCPT from '../util/get-cpt'
import SEO from '../Components/SEO'
import getPage from '../util/get-page'
import getContact from '../util/get-contact'
import LegalPage from '../Components/Pages/legal/LegalPage'
import Head from 'next/head'
import Link from 'next/link'
function termsConditions({pageData, featuresData, testimonialsData, contactData}) {
  console.log(pageData)

  return (
    <React.Fragment> 
        <Head>
        <meta name="robots" content="noindex"/>
        </Head>
    
    <h1>404 - Page Not Found</h1>
    <Link href="/">
      <a>
        Go back home
      </a>
    </Link>



    </React.Fragment>     

  )
}

export default termsConditions
export async function getStaticProps(context) {
  // get home page data using category from hero images 
  const pageData = await getPage("terms-and-conditions")
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
    revalidate: 604800
  }
}