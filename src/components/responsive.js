import styled from 'styled-components'
// breakpoints
export const mobilePortrait = 480
export const mobileLandscape = 768
export const tabletPortrait = 992
export const tabletLandscape = 1200

export const isPhonePortrait = width => width < mobileLandscape
export const isPhoneLandscape = width =>
  mobilePortrait < width && width < mobileLandscape
export const isTabletPortrait = width =>
  mobileLandscape < width && width < tabletPortrait
export const isTabletLandscape = width =>
  tabletPortrait < width && width < tabletLandscape

export const isMobile = width => width < tabletPortrait
export const isTablet = width =>
  mobileLandscape < width && width < tabletLandscape
export const isDesktop = width => width > tabletLandscape

export const MobileView = styled.div`
  display: none;
  @media (max-width: ${tabletLandscape}px) {
    display: block;
  }
`
export const DesktopView = styled.div`
  display: none;
  @media (min-width: ${tabletLandscape}px) {
    display: block;
  }
`