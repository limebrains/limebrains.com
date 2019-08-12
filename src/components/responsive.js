import React from "react";
import Responsive from 'react-responsive';

export const MobileView = props => <Responsive {...props} minWidth={2} maxWidth={1199.98} />;
export const DesktopView = props => <Responsive {...props} minWidth={1200} />;