import React from 'react';
import styled from 'styled-components'
import { mobileLandscape, mobilePortrait } from './responsive';
import { MazarLogo, NokiaLogo, SiemensLogo, HeaderLogo } from './theme/logos'
import { LimeBrainsVideoMp4, LimeBrainsVideoWebm } from './theme/videos'

import { Context as ResponsiveContext } from 'react-responsive'

import Typer from './typer';

const TextWrapper = styled.div`
  position:absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: ${({ start, end }) => `-webkit-linear-gradient(5deg, ${start || 'rgba(141,183,215, 0.1)'}, ${end || 'rgba(254, 188, 119, 0.2)'});`}
  backdrop-filter: blur(4px);
  h1 {
    font-size: 76px;
    display: block;
    font-weight: 500;
    user-select: none;
    
    @media (max-width: ${mobileLandscape}px) {
      font-size: 30px;
    }
  }
  h3 {
    font-size: 30px;
    font-weight: 300;
    padding-top: 0.5rem;
    
    @media (max-width: 1000px) {
      font-size: 16px;
    }

  }
`

const VideoWrapper = styled.div`
  display: flex;
  position: relative;
  top: 0;
  width: 100%;
  height: calc(100vh - ${(props) => props.size}px);
  line-height: 0;
  @supports (-webkit-appearance:none){
    @media (max-width: ${mobilePortrait}){
        min-height: calc(100vh - 56px);
        }
    }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Logos = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);
  
  padding-top: 1rem;
  padding-bottom: 1rem;
  
  img {
    width: 200px;
    margin-left: 2rem;
    margin-right: 2rem;
  }
  
  @media (max-width: ${mobileLandscape}px) {
    background: rgba(255, 255, 255, 1);
    bottom: 0;
    img {
      width: 100px;
      margin-left: .5rem;
      margin-right: .5rem;
    }
  }
`


const HeaderVideo = () => {
  return (
    <ResponsiveContext.Consumer>{({ isPhonePortrait }) => (
      <VideoWrapper size={isPhonePortrait ? 60 : 80}>
        <TextWrapper
          start={'rgb(0,0,0, 0.3)'}
          end={'rgba(0, 0, 0, 0.4)'}
        >
          <Typer
            title={'Lime Brains'}
            subtitle={'Software house where business questions,'}
            slogans={["meet software answers.", "meet smart ideas.", "meet great people.", "meet deadlines.", "meet smart solutions.", "meet great execution."]}
            typingSpeed={100}
            removalSpeed={40}
            timeBetweenSlogans={1500}
          />
        </TextWrapper>

        <video
          playsInline
          muted
          loop
          preload="auto"
          poster={HeaderLogo}
          autoPlay="autoplay"
        >
          <source
            data-src={LimeBrainsVideoWebm}
            src={LimeBrainsVideoWebm}
            type="video/webm"
          />
          <source
            data-src={LimeBrainsVideoMp4}
            src={LimeBrainsVideoMp4}
            type="video/mp4"
          />
          <source
            data-src='../videos/io_limebrains-header.ogv'
            src='../videos/io_limebrains-header.ogv'
            type="video/ogv"
          />
          Your browser does not support the video tag.
      </video>

        <Logos>
          <img src={MazarLogo} alt='' />
          <img src={SiemensLogo} alt='' />
          <img src={NokiaLogo} alt='' />
        </Logos>

      </VideoWrapper>
    )}
    </ResponsiveContext.Consumer>
  )
}

export default HeaderVideo;
