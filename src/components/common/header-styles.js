import styled from 'styled-components'
import { Button } from './../buttons'

export const HeaderWrapper = styled.header`
  max-height: 100px;
  position: -webkit-sticky;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 1000;

  ul {
    li {
      display: inline-block;
      list-style: none;
      margin-right: 1rem;
    }
  }
`

export const NavButton = styled(Button)`
  font-weight: 200;
`

export const LineOfBurger = styled.span`
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: white;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
`

export const CloseIcon = styled.input`
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  cursor: pointer;
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  -webkit-touch-callout: none;
`

export const MenuToggle = styled.div`
  display: block;
  position: relative;
  right: 20px;
  -webkit-user-select: none;
  user-select: none;
  ${LineOfBurger}:first-child {
    transform-origin: 0% 0%;
  }
  ${LineOfBurger}:nth-last-child (2) {
    transform-origin: 0% 100%;
  }
  ${CloseIcon}:checked ~ ${LineOfBurger} {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }
  ${CloseIcon}:checked ~ ${LineOfBurger}:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  ${CloseIcon}:checked ~ ${LineOfBurger}:nth-last-child(2) {
    transform: rotate(-45deg) translate(-0.5px, -3px);
  }
  ul {
    position: fixed;
    height: 100vh;
    top: 0;
    right: -100vw;
    overflow-y: scroll;
    margin: 0;
    padding: 0;
    width: 100vw;
    background: rgb(158 192 133);
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */
    transition: right 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    div {
      margin: 100px 0;
      li {
        margin-right: 0;
        font-size: 22px;
        display: block;
        list-style: none;
        text-align: center;
        padding: 1rem;
      }
    }
  }

  ${CloseIcon}:checked ~ ul {
    right: 0;
  }
`

export const defaultSmooth = true
export const defaultDuration = 700
export const desktopOffset = -100
export const mobileOffset = 0
