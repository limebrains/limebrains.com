import PropTypes from 'prop-types'
import React from 'react'
import { Box, Heading } from 'rendition'
import styled, { css } from 'styled-components'

import { Img } from './../img'
import { Link } from './../link'
import { Flex } from './../flex'
import { gradients } from './../theme/colors';
import { LimeBrainsLogo } from './../theme/logos'
import { Button } from './../buttons';

const HeaderWrapper = styled.header`
  max-height: 100px;
  position: sticky;
  top: 0;

  ul {
    li {
      display: inline-block;
      list-style: none;
      margin-right: 1rem;
    }
  }
`;

const NavButton = styled(Button)`
  font-weight: 100;
`


const Header = ({siteTitle}) => (
  <HeaderWrapper>
    <Flex
      justify
      align
      style={{
        background: gradients.default
      }}
    >
      <Box pt={10} pb={10} pr={10}>
        <Link to="/">
          <Img src={LimeBrainsLogo} responsive width={80}/>
        </Link>
      </Box>
      <Flex justify align alignSelf={'center'}>
        <Link to="/">
          <Heading.h2>
            {siteTitle}
          </Heading.h2>
        </Link>
      </Flex>
      <Flex
        flex={1}
        justify={'flex-end'}
        align={'flex-end'}
        alignSelf={'center'}
      >
        <ul>
          <li>
            <Link to={'/about/'}>
              <NavButton outline white text>
                ABOUT
              </NavButton>
            </Link>
          </li>
          <li>
            <Link to={'/clients/'}>
              <NavButton outline white text>
                CLIENTS
              </NavButton>
            </Link>
          </li>
          <li>
            <Link to={'/clients/'}>
              <NavButton outline white text>
                GITHUB
              </NavButton>
            </Link>
          </li>
          <li>
            <Link to={'/about/'}>
              <NavButton outline white text>
                TEAM
              </NavButton>
            </Link>
          </li>
          <li>
            <Link to={'/contact/'}>
              <NavButton outline white>
                CONTACT
              </NavButton>
            </Link>
          </li>
        </ul>
      </Flex>
    </Flex>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
