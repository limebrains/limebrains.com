import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import HeaderHome from './header-blog'

import { Provider } from 'rendition'
import { theme } from './../theme/theme'
import { Footer } from './footer'

import { LocationProvider } from '@reach/router'
import { Context as ResponsiveContext } from 'react-responsive'
import { isMobile, isPhonePortrait, isDesktop } from '../responsive'

import HeaderVideo from '../video'

const ContentWrapper = styled.div`
  min-height: 75vh;
`

const renderHeader = siteTitle => {
  return (
    <LocationProvider>
      {context =>
        context.location.pathname === '/' ? (
          <Header siteTitle={siteTitle} />
        ) : (
          <HeaderHome siteTitle={siteTitle} />
        )
      }
    </LocationProvider>
  )
}

const renderVideo = () => {
  return (
    <LocationProvider>
      {context => (context.location.pathname === '/' ? <HeaderVideo /> : '')}
    </LocationProvider>
  )
}

const Layout = ({ children }) => {
  const [currentWidth, setCurrentWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  )

  useEffect(() => {
    const updateDimensions = () => {
      setCurrentWidth(window.innerWidth)
    }
    window.addEventListener('resize', updateDimensions)
    setTimeout(updateDimensions, 0)
    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  });

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
                width: currentWidth,
                isMobile: isMobile(currentWidth),
                isPhonePortrait: isPhonePortrait(currentWidth),
                isDesktop: isDesktop(currentWidth),
              }}
            >
              {renderVideo()}
              {renderHeader(data.site.siteMetadata.title)}

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
