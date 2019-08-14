import React from "react";
import Responsive from 'react-responsive';

// breakpoints
const mobilePortrait = 480
const mobileLandscape = 768
const tabletPortrait = 992
const tabletLandscape = 1200

export const isPhonePortrait = width => width < mobileLandscape
export const isPhoneLandscape = width => mobilePortrait < width && width < mobileLandscape
export const isTabletPortait = width => mobileLandscape < width && width < tabletPortrait
export const isTabletLandscape = width => tabletPortrait < width && width < tabletLandscape

export const isMobile = width => width < tabletPortrait
export const isTablet = width => mobileLandscape < width && width < tabletLandscape
export const isDesktop = width => width > tabletLandscape

export const MobileView = props => (
  <Responsive {...props} maxWidth={tabletLandscape-0.02} />
)
export const DesktopView = props => (
  <Responsive {...props} minWidth={tabletLandscape} />
)
