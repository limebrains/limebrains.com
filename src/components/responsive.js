import React from "react";
import Responsive from 'react-responsive';

// breakpoints
export const mobilePortrait = 488;
export const mobileLandscape = 600;
export const tabletPortrait = 700;
export const tabletLandscape = 1024;

export const isPhone = (width) => width < tabletPortrait;
export const isTablet = (width) => mobileLandscape < width && width < tabletLandscape;

export const isMobile = (width) => width < tabletLandscape;
export const isDesktop = (width) => width > tabletLandscape;

export const MobileView = props => <Responsive {...props} minWidth={2} maxWidth={tabletLandscape} />;
export const DesktopView = props => <Responsive {...props} minWidth={tabletLandscape} />;