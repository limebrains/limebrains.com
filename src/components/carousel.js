import React from 'react';
import styled from 'styled-components';
import { graphql } from "gatsby";
import { colors } from '../components/theme/colors';
import { FaAngleRight, FaAngleLeft, FaShareAlt } from "react-icons/fa";
import { mobileLandscape } from './responsive';
import { Link as DefaultLink } from './link'

const Container = styled.div`
  position: relative;
  height: 60vh;
  margin-top: 10vh;
  margin-bottom: 10vh;
  white-space: nowrap;
  overflow:hidden;
`
const Link = styled(DefaultLink)`
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
    const { data } = this.props;
    console.log(data)
    return (
      <Content>
        <span className="share">
          <FaShareAlt />
        </span>
        <p className="date">
          <b>LimeBrains</b>{data.allMarkdownRemark.edges[index].node.frontmatter.date}
        </p>
        <p className="header">
          <Link to="/">{data.allMarkdownRemark.edges[index].node.frontmatter.title}</Link>
        </p>
        <p className="subHeader">
          {data.allMarkdownRemark.edges[index].node.frontmatter.subtitle}
        </p>
        <Link to={data.allMarkdownRemark.edges[index].node.fields.slug} className="visit">Show More</Link>
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
    return (
      <div ref={this.myRef}>
        <Container background={colors.sections.greenSection.background}>

          {
            Slides.map((slide) => (
              <Image url={slide.image} key={slide.link} translateValue={this.state.translateValue} />
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
    image: 'https://i.ytimg.com/vi/HWn85tjFMIQ/maxresdefault.jpg',
  },
  {
    image: 'https://c.pxhere.com/photos/b3/37/coding_computer_hacker_hacking_html_programmer_programming_script-1366057.jpg!d',
  },
  {
    image: 'https://static.pexels.com/photos/7055/desk-computer-imac-home-large.jpg',
  }
]

export const query = graphql`
{
  allMarkdownRemark(filter: {fields: {layout: {eq: "blog-post"}}}) {
    edges {
      node {
        frontmatter {
          index
          title
          subtitle
        }
      }
    }
  }
}

`