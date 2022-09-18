import React from 'react'
import getCPT from '../util/get-cpt'
import getPage from '../util/get-page'
import getContact from '../util/get-contact'
import Head from 'next/head'
import Link from 'next/link'
function termsConditions({pageData, featuresData, testimonialsData, contactData}) {

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
export async function getServerSideProps(context) {
  // get home page data using category from hero images 
  const featuresData = await getCPT("features")
  const allModulesData = await getCPT('modules')
  const contactData = await getContact();

  return {
    props: {
     featuresData: featuresData, 
     allModulesData: allModulesData,
     contactData: contactData, 

    },
    // revalidate: 86400
  }
}