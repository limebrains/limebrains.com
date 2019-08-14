import React from "react";
import Responsive from 'react-responsive';

// breakpoints
const mobilePortrait = 488;
const mobileLandscape = 600;
const tabletPortrait = 700;
const tabletLandscape = 1024;

const isPhone = (width) => width < tabletPortrait;
const isTablet = (width) => mobileLandscape < width && width < tabletLandscape;

export const isMobile = (width) => width < tabletLandscape;
const isDesktop = (width) => width > tabletLandscape;

export const MobileView = props => <Responsive {...props} minWidth={2} maxWidth={tabletLandscape} />;
export const DesktopView = props => <Responsive {...props} minWidth={tabletLandscape} />;