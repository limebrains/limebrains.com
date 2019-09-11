import React from 'react';
import styled from 'styled-components'
import { FaGit } from 'react-icons/fa'

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
  grid-auto-rows: auto;
  justify-items: center;
  margin-left: 5%;
  margin-right: 5%;
  padding-bottom: 4rem;
  @media only screen and (min-width: 1400px){
    grid-template-columns: repeat(3, minmax(320px, 1fr));
  }
  @media only screen and (max-width: 650px){
    margin-left: 0;
    margin-right: 0;
  }
  @media only screen and (max-width: 360px){
    justify-items: center;
  }
`

const Box = styled.div`
  width: 300px;
  height: 100px;
  padding-top: 4rem;
`

const IconWrapper = styled.div`
  width:20%;
  height:100%;
  float:left;
`

const TextWrapper = styled.div`
  height: 100%;
  width: 80%;
  float: right;

  h4{
    margin: 0;
    float: left;
    font-size: 1.125em;
    font-weight: 300;
  }

  p{
    float: left;
    font-size: 1.1em;
    font-weight: 100;
  }
`


export const JobSection = () => {
  return(
      <Container>
        <Box>
          <IconWrapper>
            <FaGit size={32} />
          </IconWrapper>
          <TextWrapper>
            <h4>Top remote jobs</h4> 
            <p>Benefit from our sales power and get to work on the most interesting projects around </p> 
          </TextWrapper>
        </Box>
        
        <Box>
          <IconWrapper>
            <FaGit size={32} />
          </IconWrapper>
          <TextWrapper>
            <h4>Title title title title</h4> 
            <p>Some textSome textSome textSome </p> 
          </TextWrapper>
        </Box>
        
        <Box>
          <IconWrapper>
            <FaGit size={32} />
          </IconWrapper>
          <TextWrapper>
            <h4>Title title title title</h4> 
            <p>Some textSome textSome textSome </p> 
          </TextWrapper>
        </Box>
        
        <Box>
          <IconWrapper>
            <FaGit size={32} />
          </IconWrapper>
          <TextWrapper>
            <h4>Title title title title</h4> 
            <p>Some textSome textSome textSome </p> 
          </TextWrapper>
        </Box>
        
        <Box>
          <IconWrapper>
            <FaGit size={32} />
          </IconWrapper>
          <TextWrapper>
            <h4>Title title title title</h4> 
            <p>Some textSome textSome textSome </p> 
          </TextWrapper>
        </Box>
        
        <Box>
          <IconWrapper>
            <FaGit size={32} />
          </IconWrapper>
          <TextWrapper>
            <h4>Title title title title</h4> 
            <p>Some textSome textSome textSome </p> 
          </TextWrapper>
        </Box>
      </Container>
  )
  
}