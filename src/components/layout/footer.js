import styled from 'styled-components'
import Particles from 'react-particles-js'
import React from 'react'
import { colors, gradients } from './../theme/colors'
import { Flex } from './../flex'
import { Box, Heading, Txt } from 'rendition'
import { LimeBrainsLogo } from './../theme/logos'
import { Img } from './../img'
import { Link as LinkDefault } from '../link'
import { MobileView, DesktopView } from '../responsive'
import { Context as ResponsiveContext } from 'react-responsive'
import { SectionHeading } from '../heading'
import { GetProjects, GetClients } from '../fetchJson'

const StyledFooter = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
`

const Nav = styled(Flex)`
  flex: 1;
  position: relative;
  z-index: 10;
  color: ${colors.white};
  padding: 20px 20px 0 20px;
  padding-top: 7.8125vw;
  padding-bottom: 6.51042vw;
  ul {
    padding: 0;
    li {
      color: ${colors.white};
      list-style: none;
    }
  }
`

const NavList = styled.div`
  width: 30%;
  li{
    font-size: 22px;
    font-weight: 200;
  }
`

const FooterMain = styled.div`
  width: 70%;
  p{
    font-size: 22px;
    font-weight: 200;
    letter-spacing: 0.125em;
    padding-left: 3em;

  }

`
const Link = styled(LinkDefault)`
  a{
    position: relative;
    &:before{
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #FFF;
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out;
    }

    &:hover:before{
      visibility: visible;
      transform: scaleX(1);
    }
  }
`

export const Footer = () => {
  return (
    <ResponsiveContext.Consumer>
      {({ isDesktop }) => (
        <StyledFooter>
          <Particles
            width={'100%'}
            height={'100%'}
            params={{
              particles: {
                line_linked: {
                  shadow: {
                    enable: false,
                    color: '#ffffff',
                    blur: 5,
                  },
                },
                number: {
                  value: 30,
                },
                size: {
                  value: 3,
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: 'repulse',
                  },
                },
              },
            }}
            style={{
              width: '100%',
              height: '100%',
              background: `${gradients.default}`,
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 0,
            }}
          />
          <Nav>
            <DesktopView>

            <FooterMain>
              <Box flex={1}>
                <p>
                  <Link to="/">Lime Brains</Link>
                </p>
              </Box>
            </FooterMain>
            <NavList>
              <Box flex={1}>
                <ul>
                    <li>
                      <Link to={'/'}><a>Home</a></Link>
                    </li>
                    <li>
                      <Link to={'/'}><a>Clients</a></Link>
                    </li>
                    <li>
                      <Link to={'/'}><a>Projects</a></Link>
                    </li>
                    <li>
                      <Link to={'/'}><a>Contact</a></Link>
                    </li>
                    <li>
                      <Link to={'/en/privacy'}><a>Privacy</a></Link>
                    </li>
                  </ul>
                </Box>
              </NavList>


            </DesktopView>

            <MobileView>
              <Flex flexDirection={'column'} w={1}>
                <Flex>
       
                  <Box flex={1}>
                  </Box>
                </Flex>
                <SectionHeading title={''} inverse />
                <Flex>
                  <Box flex={1}>
                    <ul>
                      <li>
                        <Link to={'/'}>HOME</Link>
                      </li>
                      <li>
                        <Link to={'/'}>CLIENTS</Link>
                      </li>
                      <li>
                        <Link to={'/'}>PROJECTS</Link>
                      </li>
                      <li>
                        <Link to={'/'}>CONTACT</Link>
                      </li>
                      <li>
                        <Link to={'/en/privacy'}>PRIVACY</Link>
                      </li>
                    </ul>
                  </Box>
                  <Box flex={1}>
                    <Img
                      src={LimeBrainsLogo}
                      width={50}
                      height={50}
                      responsive
                      center
                    />
                    <Txt.p align={'center'}>
                      Lime Brains
                      <br />
                      sp. z o. o.
                    </Txt.p>
                  </Box>
                  <Box flex={1}>
                    <Heading.h3>Social Media</Heading.h3>
                  </Box>
                </Flex>
              </Flex>
            </MobileView>
          </Nav>
        </StyledFooter>
      )}
    </ResponsiveContext.Consumer>
  )
}