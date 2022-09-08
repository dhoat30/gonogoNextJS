import React from 'react'
import Hero from './UI/Hero/Hero'

function HomePage({homePageData}) {
    console.log(homePageData[0].acf)
  return (
    <Hero 
    desktopImage={homePageData[0].acf.hero_image.desktop_hero_image}
    mobileImage= {homePageData[0].acf.hero_image.mobile_hero_image}
    title={homePageData[0].acf.hero_content.title}
    subtitle={homePageData[0].acf.hero_content.subtitle}
    primaryButtonData={homePageData[0].acf.hero_content.primary_call_to_action}
    secondaryButtonData={homePageData[0].acf.hero_content.secondary_call_to_action}

    />
  )
}

export default HomePage