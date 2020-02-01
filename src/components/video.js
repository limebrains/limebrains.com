import React from 'react'
import styled from 'styled-components'
import { mobileLandscape, mobilePortrait } from './responsive'
import { MazarLogo, NokiaLogo, SiemensLogo } from './theme/logos'

import Typer from './typer'
import { Link } from './link';
import { Slide, Fade } from 'react-reveal';

const TextWrapper = styled.div`
  position: absolute;
  top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
  padding-left: 3rem;
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
`;

const VideoWrapper = styled.div`
  display: flex;
  position: relative;
  top: 0;
  width: 100%;
  height: calc(100vh - 80px);
  line-height: 0;
  @supports (-webkit-appearance: none) {
    @media (max-width: ${mobilePortrait}) {
      min-height: calc(100vh - 56px);
    }
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: ${mobileLandscape}px) {
    height: calc(100vh - 60px);
  }
  
  img.background-img {
    position: absolute;
    top: 25%;
    right: 0;
    width: 100vw;
    height: 50vh;
    object-fit: contain;
    display: flex;
    align-self: center;
    justify-self: center;
    margin: 0 auto;
  }
`;

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
  background: rgba(0, 0, 0, 0.05);

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
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
  }
`;

const HeaderVideo = () => {
  /*
  <video
    playsInline
    muted
    loop
    preload="auto"
    poster={HeaderLogo}
    autoPlay="autoplay"
  >
    <source
      data-src={LimeBrainsVideoMp4}
      src={LimeBrainsVideoMp4}
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
   */
  return (
    <VideoWrapper>
      <TextWrapper start={'rgb(0,0,0, .1)'} end={'rgba(0, 0, 0, 0.2)'}>
        <Typer
          title={'Lime Brains'}
          subtitle={'Software house where business questions,'}
          slogans={[
            'meet software answers.',
            'meet smart ideas.',
            'meet great people.',
            'meet deadlines.',
            'meet smart solutions.',
            'meet great execution.',
          ]}
          typingSpeed={70}
          removalSpeed={20}
          timeBetweenSlogans={1500}
        />
      </TextWrapper>

      <Slide left fraction={1}>
        <img src='https://i.imgur.com/vaoyL6A.jpg' alt='' className="background-img"/>
      </Slide>

      <Link to={'/clients'}>
        <Logos>
          <Fade>
            <img src={MazarLogo} alt=""/>
            <img src={SiemensLogo} alt=""/>
            <img src={NokiaLogo} alt=""/>
          </Fade>
        </Logos>
      </Link>
    </VideoWrapper>
  )
};

export default HeaderVideo
