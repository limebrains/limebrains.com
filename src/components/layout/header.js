import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { Heading } from 'rendition'
import styled from 'styled-components'

import {Img} from './../img'
import {Link} from './../link'
import {Link as LinkScroll} from 'react-scroll'
import {Flex, Box} from './../flex'
import {gradients} from './../theme/colors'
import {LimeBrainsLogo} from './../theme/logos'
import {Button} from './../buttons'
import {Flip} from 'react-reveal'
import {BrowserView, MobileView} from 'react-device-detect'

const HeaderWrapper = styled.header`
  max-height: 100px;
  position: -webkit-sticky;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 1000;

  ul {
    li {
      display: inline-block;
      list-style: none;
      margin-right: 1rem;
    }
  }
`

const NavButton = styled(Button)`
  font-weight: 100;
`

const LineOfBurger = styled.span`
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: white;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
`

const CloseIcon = styled.input`
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  cursor: pointer;
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  -webkit-touch-callout: none;
`

const MenuToggle = styled.div`
  display: block;
  position: relative;
  right: 20px;

  z-index: 1;

  -webkit-user-select: none;
  user-select: none;

  ${LineOfBurger}:first-child {
    transform-origin: 0% 0%;
  }

  ${LineOfBurger}:nth-last-child (2) {
    transform-origin: 0% 100%;
  }

  ${CloseIcon}:checked ~ ${LineOfBurger} {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }

  ${CloseIcon}:checked ~ ${LineOfBurger}:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  ${CloseIcon}:checked ~ ${LineOfBurger}:nth-last-child(2) {
    transform: rotate(-45deg) translate(-0.5px, -3px);
  }

  ul {
    position: fixed;
    width: 100%;
    height: 100%;
    margin: -100px 0 0 -50px;
    padding: 50px;
    padding-top: 125px;
    background: rgb(158 192 133);
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */
    transform-origin: 0% 0%;
    transform: translate(100%, 0);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

    li {
      font-size: 22px;
      display: block;
      list-style: none;
      text-align: center;
      padding: 1rem 1rem 1rem 7rem;
    }
  }

  ${CloseIcon}:checked ~ ul {
    transform: translate(-70%);
  }
`


const handleMenuClick = () => {
  inputBox.current.checked = false
}

const inputBox = React.createRef()

const defaultSmooth = true
const defaultDuration = 700
const desktopOffset = -100
const mobileOffset = 0

const Header = ({siteTitle}) => {


const Header = ({ siteTitle }) => {
  return (
    <HeaderWrapper>
      <Flex
        justify
        align
        style={{
          background: gradients.default,
        }}
      >
        <Box pt={10} pb={10} pr={10}>
          <Link to="/">
            <Flip left>
              <Img src={LimeBrainsLogo} responsive width={80}/>
            </Flip>
          </Link>
        </Box>
        <Flex justify align alignSelf={'center'}>
          <Link to="/">
            <Heading.h2>{siteTitle}</Heading.h2>
          </Link>
        </Flex>
        <Flex
          flex={1}
          justify={'flex-end'}
          align={'flex-end'}
          alignSelf={'center'}
        >
          <BrowserView>
            <ul>
              <li>
                <LinkScroll
                  activeClass="active"
                  to="about"
                  smooth={defaultSmooth}
                  duration={defaultDuration}
                  offset={desktopOffset}
                >
                  <NavButton outline white text>
                    ABOUT
                  </NavButton>
                </LinkScroll>
              </li>
              <li>
                <LinkScroll
                  activeClass="active"
                  to="clients"
                  smooth={defaultSmooth}
                  duration={defaultDuration}
                  offset={desktopOffset}
                >
                  <NavButton outline white text>
                    CLIENTS
                  </NavButton>
                </LinkScroll>
              </li>
              <li>
                <a
                  href="https://github.com/limebrains/"
                  style={{textDecoration: 'none'}}
                >
                  <NavButton outline white text>
                    GITHUB
                  </NavButton>
                </a>
              </li>

              <li>
                <LinkScroll
                  activeClass="active"
                  to="blog"
                  smooth={defaultSmooth}
                  duration={defaultDuration}
                  offset={desktopOffset}
                >
                  <NavButton outline white text>
                    BLOG
                  </NavButton>
                </LinkScroll>
              </li>
              <li>
                <LinkScroll
                  activeClass="active"
                  to="team"
                  smooth={defaultSmooth}
                  duration={defaultDuration}
                  offset={desktopOffset}
                >
                  <NavButton outline white text>
                    TEAM
                  </NavButton>
                </LinkScroll>
              </li>
              <li>
                <LinkScroll
                  activeClass="active"
                  to="contact"
                  smooth={defaultSmooth}
                  duration={defaultDuration}
                  offset={desktopOffset}
                >
                  <NavButton outline white>
                    CONTACT
                  </NavButton>
                </LinkScroll>
              </li>
            </ul>
          </BrowserView>

          <MobileView>
            <nav role="navigation">
              <MenuToggle>
                <CloseIcon type="checkbox" ref={inputBox} />

                <LineOfBurger />
                <LineOfBurger />
                <LineOfBurger />

                <ul id="menu">
                  <li>
                    <LinkScroll
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={defaultSmooth}
                      duration={defaultDuration}
                      offset={mobileOffset}
                    >
                      <NavButton outline white text onClick={handleMenuClick} >
                        ABOUT
                      </NavButton>
                    </LinkScroll>
                  </li>
                  <li>
                    <LinkScroll
                      activeClass="active"
                      to="clients"
                      smooth={defaultSmooth}
                      duration={defaultDuration}
                      offset={mobileOffset}
                    >
                      <NavButton outline white text onClick={handleMenuClick}>
                        CLIENTS
                      </NavButton>
                    </LinkScroll>
                  </li>
                  <li>
                    <a
                      href="https://github.com/limebrains/"
                      style={{ textDecoration: 'none' }}
                    >
                      <NavButton outline white text >
                        GITHUB
                      </NavButton>
                    </a>
                  </li>
                  <li>
                    <LinkScroll
                      activeClass="active"
                      to="blog"
                      smooth={defaultSmooth}
                      duration={defaultDuration}
                      offset={mobileOffset}
                    >
                      <NavButton outline white text onClick={handleMenuClick}>
                        BLOG
                      </NavButton>
                    </LinkScroll>
                  </li>
                  <li>
                    <LinkScroll
                      activeClass="active"
                      to="team"
                      // spy={true}
                      smooth={defaultSmooth}
                      duration={defaultDuration}
                      offset={mobileOffset}
                    >
                      <NavButton outline white text onClick={handleMenuClick}>
                        TEAM
                      </NavButton>
                    </LinkScroll>
                  </li>
                  <li>
                    <LinkScroll
                      activeClass="active"
                      to="contact"
                      smooth={defaultSmooth}
                      duration={defaultDuration}
                      offset={mobileOffset}
                    >
                      <NavButton outline white text onClick={handleMenuClick}>
                        CONTACT
                      </NavButton>
                    </LinkScroll>
                  </li>
                </ul>
              </MenuToggle>
            </nav>
          </MobileView>
        </Flex>
      </Flex>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
