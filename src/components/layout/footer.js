import styled from 'styled-components'
import Particles from 'react-particles-js'
import React from 'react'
import { colors, gradients } from './../theme/colors'
import { Flex } from './../flex'
import { Box, Heading, Txt } from 'rendition'
import { LimeBrainsLogo } from './../theme/logos'
import { Img } from './../img'
import { Link } from '../link'
import { MobileView, DesktopView } from '../responsive'

const StyledFooter = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  height: 200px;
`

const Nav = styled(Flex)`
  flex: 1;
  position: relative;
  z-index: 10;
  color: ${colors.white};
  padding: 20px;
  ≤ ul {
    li {
      color: ${colors.white};
      list-style: none;
    }
  }
`

export const Footer = () => {
  return (
    <StyledFooter>
      <Particles
        width={'100%'}
        height={200}
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
        <MobileView>
        <Box flex={1}>
          <Heading.h3>PROJECTS</Heading.h3>
          <ul>
            <li>PyDrill</li>
            <li>Pet</li>
            <li>Sufler</li>
            <li>PyOlx</li>
            <li>PyOtodom</li>
          </ul>
        </Box>
        <Box flex={1}>
          <Heading.h3>CLIENTS</Heading.h3>
          <ul>
            <li>VOX'M</li>
            <li>VILLOID</li>
            <li>COINFALCON</li>
          </ul>
        </Box>
        <Box flex={1}>
          <ul>
            <li>
              <Link to={'/'}>HOME</Link>
            </li>
            <li>
              <Link to={'/en/privacy'}>PRIVACY</Link>
            </li>
          </ul>
        </Box>
        <Box flex={1} align justify>
          <Img src={LimeBrainsLogo} width={50} height={50} responsive center />
          <Txt.p align={'center'}>
            Lime Brains
            <br />
            sp. z o. o.
          </Txt.p>
        </Box>
        <Box flex={1}>
          <Heading.h3>Social Media</Heading.h3>
        </Box>
        </MobileView>

      </Nav>
    </StyledFooter>
  )
}