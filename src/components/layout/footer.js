import styled, { css } from 'styled-components'
import Particles from 'react-particles-js'
import React from 'react'
import { colors, gradients } from './../theme/colors'
import { Flex } from './../flex'
import { Box } from 'rendition'
import { Link as LinkDefault } from '../link'
import { MobileView, DesktopView } from '../responsive'
import { IconBordered, Icon } from '../icon'

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
  margin-left: 5%;
  margin-right: 5%;
  ul {
    padding: 0;
    li {
      color: ${colors.white};
      list-style: none;
    }
  }
`

const NavList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 50%;
  @media only screen and (max-width: 443px) {
    padding-left: 4em;
  }
  @media only screen and (max-width: 375px) {
    padding-left: 3.5em;
  }
  ul {
    li {
      font-size: 1.375em;
      font-weight: 200;
      @media only screen and (max-width: 640px) {
        font-size: 1em;
      }
    }
  }
`

const NavColumn = styled.div`
  display: inline-flex;
  ul {
    li {
      font-size: 1em;
      padding-bottom: 0.6em;
      @media only screen and (max-width: 640px) {
        font-size: 0.6em;
      }
      &.navHeader {
        padding-top: 0.125em;
        font-size: 1.375em;
        font-weight: 200;
        letter-spacing: 0.125em;
        text-transform: uppercase;
        @media only screen and (max-width: 640px) {
          font-size: 1em;
        }
      }
    }
  }
`

const LogoGrid = styled.div`
  width: 50%;
  p {
    font-size: 1.375em;
    font-weight: 200;
    letter-spacing: 0.125em;

    &.social {
      padding-top: 2rem;
      letter-spacing: 0;
    }

    &.contact {
      font-size: 0.8em;
      font-weight: 100;
    }

    @media only screen and (max-width: 640px) {
      font-size: 1em;
      &.contact {
        font-size: 0.6em;
      }
    }
  }
`
const footerLinkStyle = css`
  text-decoration: none;
  color: white;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
  }
  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`

const Link = styled(LinkDefault)`
  ${footerLinkStyle};
`

const OutSideLink = styled.a`
  ${footerLinkStyle};
`

const SocialIcon = styled.div`
  width:50px;
  height:50px;
  display:table-cell;
  padding-right: 4em;

  @media only screen and (max-width: 880px){
    padding-right: 1em;
  }

  }
  &.companyInfo{
    display:flex;
    height: 100%;
    width: 100%;
    padding-top: 0.8em;
      @media only screen and (max-width: 640px){
        font-size: 0.8em;
      }
    p{
      display: inline;
      margin:0;
      padding-left: 0.5em;
      font-size: 0.8em;
      font-weight: 100;
      @media only screen and (max-width: 640px){
        font-size: 0.6em;
      } 
    a{
      color: #fff;
      text-decoration: none;
    }
  }
`

export const Footer = () => {
  return (
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
              <p className="contact">
                Lime Brains sp. z o. o.
                <br />
                NIP: 5862332197
                <br />
                REGON: 38031902300000
                <br />
                KRS: 0000733442
              </p>
              <SocialIcon className="companyInfo">
                <Icon icon="FaMapMarkerAlt" />
                <p>UL.OLIMPIJSKA 2</p>
              </SocialIcon>
              <SocialIcon className="companyInfo">
                <Icon icon="FaPhone" />
                <p>+48 665 987 443</p>
              </SocialIcon>
              <SocialIcon className="companyInfo">
                <Icon icon="FaMailBulk" />
                <p>
                  <a href="mailto:mail@limebrains.com">
                    mail@limebrains.com
                  </a>
                </p>
              </SocialIcon>

              <p className="social">Follow us:</p>
              <SocialIcon>
                <OutSideLink href={'https://github.com/limebrains/'}>
                  <IconBordered icon="FaGit" />
                </OutSideLink>
              </SocialIcon>
              <SocialIcon>
                <OutSideLink href={'https://www.facebook.com/limebrains'}>
                  <IconBordered icon="FaFacebookF" />
                </OutSideLink>
              </SocialIcon>
            </Box>
          </LogoGrid>
          <NavList>
            <NavColumn>
              <ul>
                <li className="navHeader">OpenSource</li>
                <li>
                  <OutSideLink
                    href={'https://github.com/PythonicNinja/pydrill'}
                  >
                    Pydrill
                  </OutSideLink>
                </li>
                <li>
                  <OutSideLink href={'https://github.com/limebrains/pet'}>
                    Pet
                  </OutSideLink>
                </li>
                <li>
                  <OutSideLink
                    href={'https://github.com/limebrains/sufler'}
                  >
                    Sufler
                  </OutSideLink>
                </li>
                <li>
                  <OutSideLink href={'https://github.com/limebrains/pyolx'}>
                    PyOlx
                  </OutSideLink>
                </li>
                <li>
                  <OutSideLink
                    href={'https://github.com/limebrains/pyotodom'}
                  >
                    PyOtodom
                  </OutSideLink>
                </li>
              </ul>
            </NavColumn>
            <NavColumn>
              <ul>
                <li className="navHeader">Clients</li>
                <li>
                  <OutSideLink href={'https://www.mazars.fr/'}>
                    Mazars
                  </OutSideLink>
                </li>
                <li>
                  <OutSideLink href={'https://attensi.com'}>
                    Attensi
                  </OutSideLink>
                </li>
                <li>
                  <OutSideLink href={'https://www.voxm.live'}>
                    Vox'M
                  </OutSideLink>
                </li>
                <li>
                  <OutSideLink href={'https://villoid.no/'}>
                    Villoid
                  </OutSideLink>
                </li>
                <li>
                  <OutSideLink href={'https://coinfalcon.com'}>
                    Coinfalcon
                  </OutSideLink>
                </li>
              </ul>
            </NavColumn>
            <NavColumn>
              <ul>
                <li className="navHeader">Company</li>
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                {false && (
                  <li>
                    <Link to={'/'}>Clients</Link>
                  </li>
                )}
                <li>
                  <OutSideLink href={'https://forms.gle/676Dcwo98LEYcPWy7'}>
                    Jobs
                  </OutSideLink>
                </li>
                <li>
                  <OutSideLink href={'https://github.com/limebrains/'}>
                    GitHub
                  </OutSideLink>
                </li>
                <li>
                  <Link to={'/blog'}>Blog</Link>
                </li>
                <li>
                  <OutSideLink href={'mailto:mail@limebrains.com'}>
                    Contact
                  </OutSideLink>
                </li>
                <li>
                  <Link to={'/en/privacy'}>Privacy</Link>
                </li>
              </ul>
            </NavColumn>
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
                  <p className="contact">
                    Lime Brains sp. z o. o.
                    <br />
                    NIP: 5862332197
                    <br />
                    REGON: 38031902300000
                    <br />
                    KRS: 0000733442
                  </p>
                  <SocialIcon className="companyInfo">
                    <Icon icon="FaMapMarkerAlt" />
                    <p>UL.OLIMPIJSKA 2</p>
                  </SocialIcon>
                  <SocialIcon className="companyInfo">
                    <Icon icon="FaPhone" />
                    <p>+48 665 987 443</p>
                  </SocialIcon>
                  <SocialIcon className="companyInfo">
                    <Icon icon="FaMailBulk" />
                    <p>
                      <a href="mailto:mail@limebrains.com">
                        mail@limebrains.com
                      </a>
                    </p>
                  </SocialIcon>
                  <p className="social">Follow us:</p>
                  <SocialIcon>
                    <OutSideLink href={'https://github.com/limebrains/'}>
                      <IconBordered icon="FaGit" />
                    </OutSideLink>
                  </SocialIcon>
                  <SocialIcon>
                    <OutSideLink
                      href={'https://www.facebook.com/limebrains'}
                    >
                      <IconBordered icon="FaFacebookF" />
                    </OutSideLink>
                  </SocialIcon>
                </Box>
              </LogoGrid>
              <NavList>
                <NavColumn>
                  <ul>
                    <li className="navHeader">Open Source</li>
                    <li>
                      <OutSideLink
                        href={'https://github.com/PythonicNinja/pydrill'}
                      >
                        Pydrill
                      </OutSideLink>
                    </li>
                    <li>
                      <OutSideLink
                        href={'https://github.com/limebrains/pet'}
                      >
                        Pet
                      </OutSideLink>
                    </li>
                    <li>
                      <OutSideLink
                        href={'https://github.com/limebrains/sufler'}
                      >
                        Sufler
                      </OutSideLink>
                    </li>
                    <li>
                      <OutSideLink
                        href={'https://github.com/limebrains/pyolx'}
                      >
                        PyOlx
                      </OutSideLink>
                    </li>
                    <li>
                      <OutSideLink
                        href={'https://github.com/limebrains/pyotodom'}
                      >
                        PyOtodom
                      </OutSideLink>
                    </li>
                  </ul>
                </NavColumn>
                <NavColumn>
                  <ul>
                    <li className="navHeader">Clients</li>
                    <li>
                      <OutSideLink href={'https://www.mazars.fr/'}>
                        Mazars
                      </OutSideLink>
                    </li>
                    <li>
                      <OutSideLink href={'https://attensi.com'}>
                        Attensi
                      </OutSideLink>
                    </li>
                    <li>
                      <OutSideLink href={'https://www.voxm.live'}>
                        Vox'M
                      </OutSideLink>
                    </li>
                    <li>
                      <OutSideLink href={'https://villoid.no/'}>
                        Villoid
                      </OutSideLink>
                    </li>
                    <li>
                      <OutSideLink href={'https://coinfalcon.com'}>
                        Coinfalcon
                      </OutSideLink>
                    </li>
                  </ul>
                </NavColumn>
                <NavColumn>
                  <ul>
                    <li className="navHeader">Company</li>
                    <li>
                      <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                      <OutSideLink href={'https://forms.gle/676Dcwo98LEYcPWy7'}>
                        Jobs
                      </OutSideLink>
                    </li>
                    {false && (
                      <li>
                        <Link to={'/'}>Clients</Link>
                      </li>
                    )}
                    <li>
                      <OutSideLink href={'https://github.com/limebrains/'}>
                        Github
                      </OutSideLink>
                    </li>
                    <li>
                      <Link to={'/blog'}>Blog</Link>
                    </li>
                    <li>
                      <Link to={'/'}>Contact</Link>
                    </li>
                    <li>
                      <Link to={'/en/privacy'}>Privacy</Link>
                    </li>
                  </ul>
                </NavColumn>
              </NavList>
            </Flex>
          </Flex>
        </MobileView>
      </Nav>
    </StyledFooter>
  )
}
