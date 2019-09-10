import React from 'react';
import { Context as ResponsiveContext } from 'react-responsive'
import { Section } from '../section'
import styled from 'styled-components'


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
  @media only screen and (max-width: 340px){
    width:100%;
    justify-items: stretch;
  }
`

const Box = styled.div`
  width: 300px;
  height: 100px;
  padding-top: 4rem;
  @media only screen and (max-width: 340px){
    width:100%;
  }

`

const ImageWrapper = styled.div`
  width:20%;
  height:100%;
  float:left;

  img{
    width: 42px;
    height: 42px;
    float: left;
    background-image: none;
  }
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
          <ImageWrapper>
            <img src="http://icons.iconarchive.com/icons/icons8/ios7/256/Transport-Airplane-Take-Off-icon.png"/>
          </ImageWrapper>
          <TextWrapper>
            <h4>Top remote jobs</h4> 
            <p>Benefit from our sales power and get to work on the most interesting projects around </p> 
          </TextWrapper>
        </Box>
        
        <Box>
          <ImageWrapper>
            <img src="https://cdn0.iconfinder.com/data/icons/ui-icons-pack/100/ui-icon-pack-08-512.png"/>
          </ImageWrapper>
          <TextWrapper>
            <h4>Title title title title</h4> 
            <p>Some textSome textSome textSome </p> 
          </TextWrapper>
        </Box>
        
        <Box>
          <ImageWrapper>
            <img src="https://cdn0.iconfinder.com/data/icons/ui-icons-pack/100/ui-icon-pack-08-512.png"/>
          </ImageWrapper>
          <TextWrapper>
            <h4>Title title title title</h4> 
            <p>Some textSome textSome textSome </p> 
          </TextWrapper>
        </Box>
        
        <Box>
          <ImageWrapper>
            <img src="https://cdn0.iconfinder.com/data/icons/ui-icons-pack/100/ui-icon-pack-08-512.png"/>
          </ImageWrapper>
          <TextWrapper>
            <h4>Title title title title</h4> 
            <p>Some textSome textSome textSome </p> 
          </TextWrapper>
        </Box>
        
        <Box>
          <ImageWrapper>
            <img src="https://cdn0.iconfinder.com/data/icons/ui-icons-pack/100/ui-icon-pack-08-512.png"/>
          </ImageWrapper>
          <TextWrapper>
            <h4>Title title title title</h4> 
            <p>Some textSome textSome textSome </p> 
          </TextWrapper>
        </Box>
        
        <Box>
          <ImageWrapper>
            <img src="https://cdn0.iconfinder.com/data/icons/ui-icons-pack/100/ui-icon-pack-08-512.png"/>
          </ImageWrapper>
          <TextWrapper>
            <h4>Title title title title</h4> 
            <p>Some textSome textSome textSome </p> 
          </TextWrapper>
        </Box>
      </Container>
  )
  
}