import React from 'react'
import { Link } from './../link'
import { Link as LinkScroll } from 'react-scroll'

import { NavButton } from './header-styles'

export const HeaderButton = props => {
  return (
    <li>
      <Link to={props.to} onClick={props.onClick}>
        <NavButton {...props.style}>{props.text}</NavButton>
      </Link>
    </li>
  )
}

export const HeaderHrefButton = props => {
  return (
    <li>
      <a href={props.href} style={{ textDecoration: 'none' }}>
        <NavButton {...props.style}>{props.text}</NavButton>
      </a>
    </li>
  )
}

export const HeaderButtonScrolled = props => {
  return (
    <li>
      <LinkScroll
        activeClass={props.activeClass}
        to={props.to}
        smooth={props.smooth}
        duration={props.duration}
        offset={props.offset}
      >
        <NavButton {...props.style} onClick={props.onClick}>
          {props.text}
        </NavButton>
      </LinkScroll>
    </li>
  )
}
