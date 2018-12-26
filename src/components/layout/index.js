import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';

import Header from './header'

import { Provider } from 'rendition'
import { theme } from './../theme/theme';
import { Footer } from './footer';

const ContentWrapper = styled.div`

`;

const Layout = ({children}) => (
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
          <Header siteTitle={data.site.siteMetadata.title}/>
          <ContentWrapper>
            {children}
          </ContentWrapper>
          <Footer/>
        </Provider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
