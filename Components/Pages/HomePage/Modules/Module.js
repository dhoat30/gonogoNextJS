import React from 'react'
import Hero from '../../../UI/Hero/Hero'
import RowLayout from '../../../UI/RowLayout/RowLayout'
import TwoColumnLayout from '../../../UI/ColumnLayout/TwoColumnLayout'
import TwoColumnLayoutRight from '../../../UI/ColumnLayout/TwoColumnLayoutRight'
import StillThinkingRow from '../../../UI/Videos/StillThinkingRow'
import Features from '../../../UI/Features/Features'
import JustText from '../../../UI/RowLayout/JustText'
function Module({moduleData, featuresData, stillThinkingData}) {
  if(!moduleData){ 
    return
  }
    const sections = moduleData.acf.sections.map((data, index)=> { 
       if(!data.layout.images ){ 

        return <JustText
        key={index}
            content={data.layout.content}

        />

      }
           else if(data.layout.layout_type === "Row"){ 
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
                bgColor={ data.layout.background_color}
                /> 
            }
            else if(data.layout.layout_type === "Two Column" && data.layout.two_column_graphics_alignment === "Right"){ 
              return <TwoColumnLayoutRight
              key={index}
              title={data.layout.title}
              content={data.layout.content}
              images={data.layout.images}
              bgColor={ data.layout.background_color}
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
        <Features featuresData={featuresData}/> 
        {/* still thinking section */}
        <StillThinkingRow 
        thumbnail={ moduleData.acf.module_video.video_thumbnail ? moduleData.acf.module_video.video_thumbnail :  stillThinkingData.acf.video_thumbnail}
        videoID={ moduleData.acf.module_video.video_id ? moduleData.acf.module_video.video_id : stillThinkingData.acf.video_id}
/> 
    </main>
  )
}

export default Module