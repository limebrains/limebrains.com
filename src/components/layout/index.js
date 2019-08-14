import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'

import { Provider } from 'rendition'
import { theme } from './../theme/theme'
import { Footer } from './footer'

import { Context as ResponsiveContext } from 'react-responsive'
import { isMobile, isPhonePortrait } from '../responsive'

const ContentWrapper = styled.div`
  min-height: 75vh;
`

const Layout = ({ children }) => {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth)

  useEffect(() => {
    const updateDimensions = () => {
      setCurrentWidth(window.innerWidth)
    }

    window.addEventListener('resize', updateDimensions)

    return () => {
      window.addEventListener('resize', updateDimensions)
    }
  })

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Provider theme={theme}>
            <ResponsiveContext.Provider
              value={{
                deviceWidth: setCurrentWidth,
                isMobile: isMobile(currentWidth),
                isPhonePortrait: isPhonePortrait(currentWidth),
              }}
            >
              <Header siteTitle={data.site.siteMetadata.title} />
              <ContentWrapper>{children}</ContentWrapper>
              <Footer />
            </ResponsiveContext.Provider>
          </Provider>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

/// PROVIDER
