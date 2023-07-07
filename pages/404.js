import React from 'react'
import getCPT from '../util/get-cpt'
import getContact from '../util/get-contact'
import Head from 'next/head'
import Link from 'next/link'
function termsConditions() {

  return (
    <React.Fragment>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>

      <div id='oopss'>
        <div id='error-text'>

          <span>404 PAGE</span>
          <p className="p-a">
            . The page you were looking for could not be found</p>
          <p className="p-b">
            ... Back to previous page
          </p>
          <Link legacyBehavior href="/">
            <a className="back">
              Go back home
            </a>
          </Link>
        </div>
      </div>


    </React.Fragment>

  )
}

export default termsConditions
export async function getStaticProps(context) {
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
    revalidate: 60
  }
}