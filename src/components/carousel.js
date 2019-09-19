import React from 'react';
import styled from 'styled-components';
import { colors } from '../components/theme/colors';
import { FaAngleRight, FaAngleLeft, FaShareAlt } from "react-icons/fa";
import { mobileLandscape } from './responsive';
import { Link } from './link'

const Container = styled.div`
  position: relative;
  height: 60vh;
  margin-top: 10vh;
  margin-bottom: 10vh;
  white-space: nowrap;
  overflow:hidden;
`

const Image = styled.div`
  position:relative;
  display: inline-block;

  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)),url(${props => props.url});
  background-repeat: no-repeat;
	background-position: center;
  background-size: cover;
  transition: all 0.6s ease-in-out;
  transform: translateX(${props => props.translateValue}px);
`

const Button = styled.div`
  position: absolute;
  display: flex;
  top:0;
  opacity: 0.8;
  font-size: 38px;
  width: 5vw;
  min-height: 60vh;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover{
    opacity: 0.5;
    background-color: black;
  }
  &.next{
    right: 0;
    FaAngleLeft{
      opacity: 1;
    }
  }
  &.prev{
    left: 0;
  }

  @media (max-width: ${mobileLandscape}px){
    font-size: 16px;
  }
`


const Content = styled.div`
  user-select:none;
  transition: all 1s ease-in-out;
  transform: none;

  span{
    &.share{
      position:absolute;
      border: 1px solid;
      border-radius: 20px;
        display: flex;
      align-items: center;
      justify-content: center;
      width: 34px;
      height: 34px;
      top: 10%;
      right: 10%;
      color: white;
      transition: all 0.3s ease-in-out;
      @media (max-width: ${mobileLandscape}px){
        width: 18px;
        height: 18px;
        font-size: 12px;
      }
      &:hover {
        transform: rotate(-90deg); 
 

      }
    }
  }

  p{
    position:absolute;
    white-space: nowrap;
    transition: all 0.6s ease-in-out;
    &.header{
      font-size: 2em;
      font-weight: 600;
      top:  30%;
      left: 50%;
      transform: translate(-50%, -20%);
      color: white;

      @media (max-width: ${mobileLandscape}px){
        font-size: .8em;
      }
    }

    &.date{
      font-size: .9em;
      font-weight: 300;
      top: 10%;
      left: 10%;
      transform: translate(-10%, -10%);
      color: white;
      b{
        letter-spacing: .2em;
        font-weight: 500;
        padding-right: 0.2em;
      }
      @media (max-width: ${mobileLandscape}px){
        font-size: .5em;
      }
    }

    &.subHeader{
      font-size: 1em;
      font-weight: 300;
      color: white;
      top:  50%;
      left: 50%;
      transform: translate(-50%, -50%);
      @media (max-width: ${mobileLandscape}px){
        font-size: .6em;
        top: 45%;
        transform: translate(-50%, -45%);
        
      }
    }
  }
  
  a{
    &.visit{
    text-decoration: none;
    position: absolute;
    display: inline-block;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -80%);
    color: white;
    padding: 0 3em;
    font-size: 0.8em;
    font-weight: 500;
    height:34px;
    border: 1px solid;
    border-radius: 50px;
    border-color:  #043d0c;
    background-color: #043d0c;
    line-height:34px;
    cursor: pointer;
    text-align: center;
    transition: all 0.3s ease-in-out;

    @media (max-width: ${mobileLandscape}px){
      padding 0 1em;
      font-size: .6em;
    }

    &:hover{
      background-color: #fff;
      color: #043d0c;
      }
    }


`


class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
      translateValue: 0
    }
    this.myRef = React.createRef()
  }

  renderContent = (index) => {
    return (
      <Content>
        <span className="share">
          <FaShareAlt />
        </span>
        <p className="date">
          <b>LimeBrains</b> September 18, 2019
          </p>
        <p className="header">
          <Link to="/">{Slides[index].header}</Link>
        </p>
        <p className="subHeader">
          {Slides[index].subtitle}
        </p>
        <a href="/" className="visit">Show More</a>
      </Content>
    )
  }

  nextSlide = () => {
    if (this.state.currentIndex === (Slides.length - 1)) {
      return this.setState(prevState => ({
        currentIndex: 0,
        translateValue: prevState.translateValue + this.myRef.current.clientWidth * (Slides.length - 1)
      }))
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue - this.myRef.current.clientWidth
    }))
  }

  prevSlide() {
    if (this.state.currentIndex === 0) {
      return this.setState(prevState => ({
        currentIndex: (Slides.length - 1),
        translateValue: prevState.translateValue - this.myRef.current.clientWidth * (Slides.length - 1)
      }))
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.myRef.current.clientWidth
    }))
  }

  render() {
    console.log(this.state.currentIndex)
    return (
      <div ref={this.myRef}>
        <Container background={colors.sections.greenSection.background}>

          {
            Slides.map((slide) => (
              <Image url={slide.image} translateValue={this.state.translateValue} />
            ))
          }

          <Button className="prev" onClick={() => this.prevSlide()} >
            <FaAngleLeft color="white" />
          </Button>
          <Button className="next" onClick={() => this.nextSlide()}>
            <FaAngleRight color="white" />
          </Button>

          {this.renderContent(this.state.currentIndex)}

        </Container>
      </div>
    )
  }

}

export default Carousel;

const Slides = [
  {
    header: 'Configuration for productive terminal on osx',
    subtitle: 'In just two easy steps!',
    image: 'https://i.ytimg.com/vi/HWn85tjFMIQ/maxresdefault.jpg'
  },
  {
    header: 'How to easily find biggest files?',
    subtitle: 'It couldn\'t be easier!',
    image: 'https://c.pxhere.com/photos/b3/37/coding_computer_hacker_hacking_html_programmer_programming_script-1366057.jpg!d'
  },
  {
    header: 'Testing w/ React Slider',
    subtitle: 'subtitle subtitile subtitle',
    image: 'https://static.pexels.com/photos/7055/desk-computer-imac-home-large.jpg'
  }
]