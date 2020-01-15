import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'rendition'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { LocationProvider } from '@reach/router'

import Header from './header'
import { Footer } from './footer'
import HeaderVideo from '../video'
import HeaderBlog from './header-blog'
import { theme } from './../theme/theme'

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
          <HeaderBlog siteTitle={siteTitle} />
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
  }

  render() {
    const { children } = this.props;

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
                {renderVideo()}
                {renderHeader(data.site.siteMetadata.title)}
                <ContentWrapper>{children}</ContentWrapper>
                <Footer/>
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
