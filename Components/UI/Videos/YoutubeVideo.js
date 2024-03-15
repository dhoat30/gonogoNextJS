import React, { useContext } from 'react'
import YouTube from 'react-youtube';
import styled from 'styled-components'
function YoutubeVideo({ videoID }) {

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target

  }


  return (

    <Container className='video-container'>
      <YoutubeStyle videoId={videoID} opts={opts} onReady={onPlayerReady} />

    </Container>



  );

}
export default YoutubeVideo
const Container = styled.section`
position: fixed ;
z-index: 30;
padding-bottom: 56.25%;
width: 95%; 
left: 50%; 
top: 50%;
transform: translate(-50%, -50%);
`
const YoutubeStyle = styled(YouTube)`
    position: absolute; 
    width: 100%; 
    height: 100%;

`
