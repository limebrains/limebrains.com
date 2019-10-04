import React from 'react'
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

class Layout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentWidth: typeof window !== 'undefined' ? window.innerWidth : 1200
    }
  }

  updateDimensions = () => {
    const currentWidth = typeof window !== 'undefined' ? window.innerWidth : this.state.currentWidth;
    this.setState({
      currentWidth
    });
    return currentWidth
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    setTimeout(this.updateDimensions, 0)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }

  render() {
    const { children } = this.props;
    const { currentWidth } = this.state;

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
                  deviceWidth: this.updateDimensions,
                  width: currentWidth,
                  isMobile: isMobile(currentWidth),
                  isPhonePortrait: isPhonePortrait(currentWidth),
                  isDesktop: isDesktop(currentWidth),
                }}
              >
                {renderVideo()}
                {renderHeader(data.site.siteMetadata.title)}

                <ContentWrapper>{children}</ContentWrapper>
                <Footer/>
              </ResponsiveContext.Provider>
            </Provider>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

/// PROVIDER
