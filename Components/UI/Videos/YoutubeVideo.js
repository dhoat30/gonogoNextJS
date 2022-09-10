import React from 'react'
import YouTube from 'react-youtube';
import styled from 'styled-components'
function YoutubeVideo() {
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const onPlayerReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
  return  <YoutubeStyle videoId="Bf5osq4gvlY" opts={opts}  onReady={onPlayerReady}/>;
  
}

export default YoutubeVideo

const YoutubeStyle = styled(YouTube)`
    display: flex; 
    @media(max-width: 1150px){ 
        justify-content: center;     }
    
`