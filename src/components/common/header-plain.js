import React from 'react'
import PropTypes from 'prop-types'
import { Heading } from 'rendition'
import styled from 'styled-components'

import { Img } from '../img'
import { Link } from '../link'
import { Flex, Box } from '../flex'
import { gradients } from '../theme/colors'
import { LimeBrainsLogo } from '../theme/logos'
import { Flip } from 'react-reveal'

import { mobileLandscape } from '../responsive';

const Logo = styled(Img)`
  height: 60px;
  @media (max-width: ${mobileLandscape}px) {
    height: 40px;
  }
`

const HeaderPlain = ({ children }, { siteTitle }) => {
  return (
    <Flex
      style={{
        background: gradients.default,
      }}
    >
      <Box pt={10} pb={10} pr={10}
        style={{
          flex: 0.15
        }}
      >
        <Link to="/">
          <Flip left>
            <Logo
              src={LimeBrainsLogo}
              alt={`Lime Brains logo`}
              responsive
              width={80}
            />
          </Flip>
        </Link>
      </Box>
      <Flex alignself={'center'}>
        <Link to="/">
          <Heading.h2>{siteTitle}</Heading.h2>
        </Link>
      </Flex>
      <Flex
        flex={1}
        justify={'flex-end'}
        align={'flex-end'}
        alignself={'center'}
      >
        {children}
      </Flex>
    </Flex>
  )
}

HeaderPlain.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderPlain.defaultProps = {
  siteTitle: ``,
}

export default HeaderPlain
