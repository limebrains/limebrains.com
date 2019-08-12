import React from "react";
import Responsive from 'react-responsive';

export const BurgerMenu = props => <Responsive {...props} minWidth={2} maxWidth={1199.98} />;
export const HorizonMenu = props => <Responsive {...props} minWidth={1200} />;