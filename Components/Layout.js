import React, {useContext, useEffect} from 'react'
import Header from './UI/Header/Header'
import VideoContext from '../Store/video-context'
import Overlay from './UI/Overlay/Overlay'
import YoutubeVideo from './UI/Videos/YoutubeVideo'
function Layout(props) {
  const videoCtx = useContext(VideoContext)
  useEffect(()=> { 
    console.log(videoCtx.videoModal)

  }, [videoCtx.videoModal])
  return (
    <div>
      <Header logo={props.children.props.contactData && props.children.props.contactData.logo}></Header>
        <div>{props.children}</div>

        {videoCtx.videoModal && 
        <>
        <YoutubeVideo videoID={props.children.props.stillThinkingData[0].acf.video_id}/> 
        <Overlay onClick={()=> {         videoCtx.getVideoModal(false)}}/> 
        </>
        }
    <footer></footer> 

</div>
  )
}

export default Layout

