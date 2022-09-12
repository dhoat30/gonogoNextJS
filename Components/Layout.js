import React, {useContext, useEffect} from 'react'
import Header from './UI/Header/Header'
import VideoContext from '../Store/video-context'
import Overlay from './UI/Overlay/Overlay'
import YoutubeVideo from './UI/Videos/YoutubeVideo'
import Footer from './UI/Footer/Footer'
function Layout(props) {
  // console.log(props.children.props.allModulesData)
  const videoCtx = useContext(VideoContext)
  useEffect(()=> { 

  }, [videoCtx.videoModal])
  return (
    <div>
      <Header logo={props.children.props.contactData && props.children.props.contactData.logo}
      allModulesData={props.children.props.allModulesData}/>
        <div>{props.children}</div>

        {videoCtx.videoModal && 
        <>
        <YoutubeVideo videoID={props.children.props.stillThinkingData[0].acf.video_id}/> 
        <Overlay onClick={()=> {         videoCtx.getVideoModal(false)}}/> 
        </>
        }
  <Footer  allModulesData={props.children.props.allModulesData}/> 

</div>
  )
}

export default Layout

