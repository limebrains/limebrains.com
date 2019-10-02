import * as icons from 'react-icons/fa'

import React from 'react'
import styled from 'styled-components'
import { colors } from './theme/colors'

export const Icon = ({ icon }) => {
  const Component = icons[icon]
  return <Component />
}

const IconWrapper = styled.div`
  background: ${colors.white};
  border: 1px solid ${colors.gray.light};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${colors.primary.main};
    border: 1px solid ${colors.gray.light};
    color: ${colors.white};
    transform: rotate(90deg);
  }
`

const IconBorder = styled.div`
  border: 1px solid ${colors.gray.light};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 300ms ease-in-out;
  cursor: pointer;
  margin-bottom: 10px;

  @media only screen and (max-width: 880px) {
    width: 25px;
    height: 25px;
  }
  &:hover {
    transform: rotate(90deg);
  }
`

export const IconRounded = ({ icon }, { size }) => (
  <IconWrapper>
    <Icon icon={icon} />
  </IconWrapper>
)

export const IconBordered = ({ icon }, { size }) => (
  <IconBorder>
    <Icon icon={icon} />
  </IconBorder>
)
