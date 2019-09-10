import React from 'react';
import styled from 'styled-components'

const TextWrapper = styled.div`
  position:absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 100%;
  height: 100%;
`

const VideoWrapper = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  height: calc(100vh - 100px);
  line-height: 0;

  video{
    position: absolute;
    left: 50%; /* % of surrounding element */
    top: 50%;
    transform: translate(-50%, -50%); /* % of current element */
    width: 100%;
    height: 100%;
    transition: opacity 0.5s;
    object-fit: cover;
  }
  h1{
    color: #fff;
    font-style: italic;
    font-size: 1.5vw;
    font-family: BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    font-weight: 700;
    text-shadow: #fff 0px 1px 1px;
    user-select: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    transition: transform .6s cubic-bezier(.175,.885,.32,1.275),opacity .6s;
    }

em {
  font-family: 'EB Garamond', serif;
  font-size: 10vw;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: block;
  font-style:normal;
  padding-top: 0.1em;
  text-shadow: 0.07em 0.07em 0 rgba(0, 0, 0, 0.1);
  
  &::before, &::after {
  content: "§";
  display: inline-block;
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
    opacity: 0.2;
  margin: 0 0.6em;
  font-size: 0.5em;
}

`
const HeaderVideo = ( ) => {
  return (

    <VideoWrapper>
      <TextWrapper>
        <h1><em>Thumbs up</em></h1>
      </TextWrapper>

      <video
        playsInline
        muted
        preload="auto"
        poster="https://storage.cloud.google.com/static-voxm/04791ff99c7f7b0de02c6544bb66f04a.jpg"
        autoPlay="autoplay"
      >
          <source
            data-src="https://storage.cloud.google.com/static-voxm/media.io_limebrains-header.webm"
            src="https://storage.cloud.google.com/static-voxm/media.io_limebrains-header.webm"
            type="video/webm"
          />
          <source
            data-src="https://storage.cloud.google.com/static-voxm/b33bb9360a08ef81f43e7e91d0a89f0b.mp4"
            src="https://storage.cloud.google.com/static-voxm/b33bb9360a08ef81f43e7e91d0a89f0b.mp4"
            type="video/mp4"
          />
          <source
            data-src="https://storage.cloud.google.com/static-voxm/media.io_limebrains-header.ogv"
            src="https://storage.cloud.google.com/static-voxm/media.io_limebrains-header.ogv"
            type="video/mp4"
          />
          Your browser does not support the video tag.
      </video>

    </VideoWrapper>
  )
}

export default HeaderVideo;
