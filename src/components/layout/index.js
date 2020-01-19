import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'rendition'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { Location } from '@reach/router'


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
    <Location>
      {({ location }) => (
        <div>
          <h2>PATH: {location.pathname}</h2>
          {location.pathname === '/' ? (
            <Header siteTitle={siteTitle}/>
          ) : (
            <HeaderBlog siteTitle={siteTitle}/>
          )}
        </div>
      )}
    </Location>
  )
}

const renderVideo = () => {
  return (
    <Location>
      {({ location }) => (
        <div>
          <h2>PATH: {location.pathname}</h2>
          {location.pathname === '/blog' && (<HeaderVideo/>)}
        </div>
      )}
    </Location>
  )
}

class Layout extends React.PureComponent {

  render() {
    const { children } = this.props

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
