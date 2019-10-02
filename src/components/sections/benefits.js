import React from 'react'
import styled from 'styled-components'
import {
  FaAndroid,
  FaApple,
  FaGithub,
  FaCloud,
  FaBug,
  FaCalendar,
} from 'react-icons/fa'

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
  grid-auto-rows: auto;
  justify-items: center;
  margin-left: 5%;
  margin-right: 5%;
  padding-bottom: 4rem;
  @media only screen and (min-width: 1400px) {
    grid-template-columns: repeat(3, minmax(320px, 1fr));
  }
  @media only screen and (max-width: 650px) {
    margin-left: 0;
    margin-right: 0;
  }
  @media only screen and (max-width: 360px) {
    justify-items: center;
  }
`

const Box = styled.div`
  width: 300px;
  height: 100px;
  padding-top: 4rem;
`

const IconWrapper = styled.div`
  width: 20%;
  height: 100%;
  float: left;
`

const TextWrapper = styled.div`
  height: 100%;
  width: 80%;
  float: right;

  h4 {
    margin: 0;
    float: left;
    font-size: 1.125em;
    font-weight: 300;
  }

  p {
    float: left;
    font-size: 1.1em;
    font-weight: 100;
  }
`

export const JobSection = () => {
  return (
    <Container>
      <Box>
        <IconWrapper>
          <FaAndroid size={32} />
        </IconWrapper>
        <TextWrapper>
          <h4>Android</h4>
          <p>We develop Android apps</p>
        </TextWrapper>
      </Box>

      <Box>
        <IconWrapper>
          <FaApple size={32} />
        </IconWrapper>
        <TextWrapper>
          <h4>iOS</h4>
          <p>We develop iOS apps both for iPhone's or iPad's</p>
        </TextWrapper>
      </Box>

      <Box>
        <IconWrapper>
          <FaCloud size={32} />
        </IconWrapper>
        <TextWrapper>
          <h4>Cloud</h4>
          <p>We are familiar with: AWS cloud, Google Cloud, Azure, Hetzner</p>
        </TextWrapper>
      </Box>

      <Box>
        <IconWrapper>
          <FaGithub size={32} />
        </IconWrapper>
        <TextWrapper>
          <h4>Open Source</h4>
          <p>We believe and contribute to Open Source projects</p>
        </TextWrapper>
      </Box>

      <Box>
        <IconWrapper>
          <FaBug size={32} />
        </IconWrapper>
        <TextWrapper>
          <h4>Test Driven Development</h4>
          <p>We believe in Test driven development</p>
        </TextWrapper>
      </Box>

      <Box>
        <IconWrapper>
          <FaCalendar size={32} />
        </IconWrapper>
        <TextWrapper>
          <h4>Goals</h4>
          <p>We believe that reaching goals needs flexible attitude</p>
        </TextWrapper>
      </Box>
    </Container>
  )
}
