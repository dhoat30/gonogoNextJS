import React from 'react'
import Hero from '../../UI/Hero/Hero'
import RowLayout from '../../UI/RowLayout/RowLayout'
import TwoColumnLayout from '../../UI/ColumnLayout/TwoColumnLayout'

function IssuesIdeasIncidents({moduleData}) {
    // console.log(moduleData.acf.sections)
    const sections = moduleData.acf.sections.map((data, index)=> { 
            console.log(data.layout)
            if(data.layout.layout_type === "Row"){ 
                return <RowLayout
                key={index}
                title={data.layout.title}
                content={data.layout.content}
                images={data.layout.images}
                /> 
            }
            else if(data.layout.layout_type === "Two Column" && data.layout.two_column_graphics_alignment === "Left"){ 
                return <TwoColumnLayout
                key={index}
                title={data.layout.title}
                content={data.layout.content}
                images={data.layout.images}
                /> 
            }
    })
  return (
    <main>
        {/* hero section  */}
        <Hero
        desktopImage={moduleData.acf.hero_section.desktop_hero_image.url}
        mobileImage={moduleData.acf.hero_section.mobile_hero_image.url}
        title={moduleData.acf.hero_section.title}
        subtitle={moduleData.acf.hero_section.subtitle}
        primaryButtonData={
          moduleData.acf.hero_section.primary_call_to_action
        }
        secondaryButtonData={
          moduleData.acf.hero_section.secondary_call_to_action
        }
      />
        {sections}

    </main>
  )
}

export default IssuesIdeasIncidents