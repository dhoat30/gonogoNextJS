import React from 'react'
import getSingleCpt from '../../util/get-single-cpt'
import getCPT from '../../util/get-cpt'
import Module from '../../Components/Pages/HomePage/Modules/Module'
import getContact from '../../util/get-contact'
import BlogPage from '../../Components/Pages/Blogs/BlogPage'
function blogs({blogData, featuresData, stillThinkingData}) {
  return (
   <BlogPage
   blogData={blogData[0]}
   featuresData={featuresData}
   stillThinkingData={stillThinkingData}
   />
  )
}

export default blogs
export async function getServerSideProps(context) {
  const {params} = context
  const slug = params.slug
  // get home page data using category from hero images 
  const blogData = await getSingleCpt('posts', slug)
  const featuresData = await getCPT("features")
  const contactData = await getContact();
  const stillThinkingData = await getSingleCpt('videos', "still-thinking")
  const allModulesData = await getCPT('modules')
const allBlogData = await getCPT("posts")
  return {
    props: {
     blogData: blogData, 
     featuresData: featuresData, 
     contactData: contactData,
     stillThinkingData: stillThinkingData, 
     allModulesData: allModulesData,
      allBlogData: allBlogData
    }
  }
}
