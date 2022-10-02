import React from 'react'
import { Link } from './../link'

import { NavButton } from './header-styles'

export const HeaderButton = props => {
  return (
    <li>
      <Link to={props.to} onClick={props.onClick} target={props.target}>
        <NavButton {...props.style}>{props.text}</NavButton>
      </Link>
    </li>
  )
};

export const HeaderHrefButton = props => {
  return (
    <li>
      <a href={props.href} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
        <NavButton {...props.style}>{props.text}</NavButton>
      </a>
    </li>
  )
};
