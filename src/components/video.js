import React from 'react';
import styled from 'styled-components'


const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 1000px;
  line-height: 0;
  background: #124DD9;
  video{
    position: relative;
    top:0;
    bottom:0;
    left:0;
    right:0;
    width: 100% !important;
    height: auto !important;
  }
`

const HeaderVideo = ( ) => {
  return (
    <VideoWrapper>
      <video playsInline muted preload="auto" poster="https://res.cloudinary.com/studio-up/image/fetch/f_auto/https://d22ivmygv0pwjj.cloudfront.net/v2/homeHero.jpg" autoplay="autoplay" data-loaded="true"  >
          <source data-src="https://d22ivmygv0pwjj.cloudfront.net/v2/homeHero.webm" src="https://d22ivmygv0pwjj.cloudfront.net/v2/homeHero.webm" type="video/webm" />
          <source data-src="https://d22ivmygv0pwjj.cloudfront.net/v2/homeHero.mp4" src="https://d22ivmygv0pwjj.cloudfront.net/v2/homeHero.mp4" type="video/mp4" />
          <source data-src="https://d22ivmygv0pwjj.cloudfront.net/v2/homeHero.ogg" src="https://d22ivmygv0pwjj.cloudfront.net/v2/homeHero.ogg" type="video/mp4" />
          Your browser does not support the video tag.
      </video>
    </VideoWrapper>
  )
}

export default HeaderVideo;