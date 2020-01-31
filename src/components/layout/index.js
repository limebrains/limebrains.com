import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'rendition'
import styled from 'styled-components'
import { Location } from '@reach/router'

import Header from './header'
import { Footer } from './footer'
import HeaderVideo from '../video'
import { theme } from './../theme/theme'

const ContentWrapper = styled.div`
  min-height: 75vh;
`;

const StickyWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const renderVideo = () => {
  return (
    <Location>
      {({location}) => (
        location.pathname === '/' && (<HeaderVideo/>)
      )}
    </Location>
  )
};

class Layout extends React.PureComponent {

  render() {
    const {children} = this.props;

    return (
      <Provider theme={theme}>
        {renderVideo()}
        <StickyWrapper>
          <Header/>
        </StickyWrapper>
        <ContentWrapper>{children}</ContentWrapper>
        <Footer/>
      </Provider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
