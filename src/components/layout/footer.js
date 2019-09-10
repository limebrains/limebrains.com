import styled from 'styled-components'
import Particles from 'react-particles-js'
import React from 'react'
import { colors, gradients } from './../theme/colors'
import { Flex } from './../flex'
import { Box } from 'rendition'
import { Link as LinkDefault } from '../link'
import { MobileView, DesktopView } from '../responsive'
import { Context as ResponsiveContext } from 'react-responsive'
import { IconBordered } from '../icon';

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
    font-size: 1.375em;
    font-weight: 200;

    @media only screen and (max-width: 640px){
      font-size: 1em;
      padding-left: 2em;
    }
  }
`

const LogoGrid = styled.div`
  width: 70%;
  p{
    font-size: 1.375em;
    font-weight: 200;
    letter-spacing: 0.125em;
    padding-left: 3em;


    &.social{
      padding-top: 2rem;
      letter-spacing: 0;
    }

    @media only screen and (max-width: 640px){
      font-size: 1em;
    }
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
const SocialIcons = styled.div`
  width:50px;
  height:50px;
  display:table-cell;
  padding-left: 4.125em;
  @media only screen and (max-width: 640px){
    font-size: 1em;
    padding-left: 3em;
  }
  @media only screen and (max-width: 340px){
    font-size: 1em;
    padding-left: 3em;
    display:flex;
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

            <LogoGrid>
              <Box flex={1}>
                <p>
                  <Link to="/">Lime Brains</Link>
                </p>
                <p className="social">
                  Follow us:
                </p>
                <SocialIcons>
                  <IconBordered icon="FaGit"  />
                </SocialIcons>
                <SocialIcons>
                  <IconBordered icon="FaFacebookF"  />
                </SocialIcons>
                <SocialIcons>
                  <IconBordered icon="FaInstagram"  />
                </SocialIcons>
              </Box>
            </LogoGrid>
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
                      <Link to={'/blog'}><a>Blog</a></Link>
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
                <LogoGrid>
                    <Box flex={1}>
                      <p>
                        <Link to="/">Lime Brains</Link>
                      </p>
                      <p className="social">
                        Follow us:
                      </p>
                      <SocialIcons>
                        <IconBordered icon="FaGit"  />
                      </SocialIcons>
                      <SocialIcons>
                        <IconBordered icon="FaFacebookF"  />
                      </SocialIcons>
                      <SocialIcons>
                        <IconBordered icon="FaInstagram"  />
                      </SocialIcons>
                    </Box>
                  </LogoGrid>
                  <NavList>
                    <Box flex={1}>
                      <ul>
                        <li>
                          <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                          <Link to={'/'}>Clients</Link>
                        </li>
                        <li>
                          <Link to={'/'}>Projects</Link>
                        </li>
                        <li>
                          <Link to={'/blog'}><a>Blog</a></Link>
                        </li>
                        <li>
                          <Link to={'/'}>Contact</Link>
                        </li>
                        <li>
                          <Link to={'/en/privacy'}>Privacy</Link>
                        </li>
                      </ul>
                    </Box>
                  </NavList>
                </Flex>
              </Flex>
            </MobileView>
          </Nav>
        </StyledFooter>
      )}
    </ResponsiveContext.Consumer>
  )
}