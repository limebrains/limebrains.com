import PropTypes from 'prop-types'
import React from 'react'
import { Box, Heading, Button } from 'rendition'

import { Img } from './img'
import { Link } from './link'
import { Flex } from './flex'
import { gradients } from './theme/colors';
import { LimeBrainsLogo } from './theme/logos'


const Header = ({siteTitle}) => (
  <Flex
    style={{
      background: gradients.default
    }}
  >
    <Link to="/">
      <Flex justify align>
        <Box width={1/5}>
          <Img src={LimeBrainsLogo} />
        </Box>
        <Flex justify align alignSelf={'center'}>
          <Heading.h1>
            {siteTitle}
          </Heading.h1>
        </Flex>
      </Flex>
    </Link>
  </Flex>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
