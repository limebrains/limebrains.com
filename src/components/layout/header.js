import PropTypes from 'prop-types'
import React, {useEffect} from 'react'
import {Heading} from 'rendition'
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

import './header.css'

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


const handleMenuClick = () => {
    inputBox.current.checked = false
}

const inputBox = React.createRef()

const defaultSmooth = true
const defaultDuration = 700
const desktopOffset = -100
const mobileOffset = 0

const Header = ({siteTitle}) => {


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
              <div id="menuToggle">
                <input id="closeIcon" type="checkbox" ref={inputBox}/>
    
                <span></span>
                <span></span>
                <span></span>

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
                      style={{textDecoration: 'none'}}
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
              </div>
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
