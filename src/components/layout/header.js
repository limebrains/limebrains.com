import React from 'react'
import { MobileView, DesktopView } from '../responsive'
import { HeaderButton, HeaderHrefButton } from '../common/header-button'
import {
  HeaderWrapper,
  LineOfBurger,
  CloseIcon,
  MenuToggle,
  defaultSmooth,
  defaultDuration,
  desktopOffset,
} from '../common/header-styles'
import HeaderPlain from '../common/header-plain'

const inputBox = React.createRef();
const handleMenuClick = () => {
  inputBox.current.checked = false
  document.body.style.overflow = "auto"
}
const inputBoxOnClick = (e) => {
  if (e.target.checked) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
  }
}

const Header = () => {
  /*
  <HeaderHrefButton
    href="https://drift.me/mail12/meeting"
    text="MEET US"
    activeClass="active"
    smooth={defaultSmooth}
    duration={defaultDuration}
    offset={desktopOffset}
    style={{
      white: true,
      outline: true,
      text: false,
    }}
  />
   */
  return (
    <HeaderWrapper>
      <HeaderPlain>
        <DesktopView>
          <ul>
            <HeaderButton
              to="/about"
              text="ABOUT US"
              style={{
                white: true,
                outline: true,
                text: true,
              }}
            />
            <HeaderButton
              to="/blog"
              text="BLOG"
              style={{
                white: true,
                outline: true,
                text: true,
              }}
            />
            <HeaderHrefButton
              href="https://forms.gle/RQkY962BStAm9D5eA"
              text="CAREERS"
              onClick={handleMenuClick}
              style={{
                white: true,
                outline: true,
                text: true,
              }}
            />
            <HeaderButton
              to="/clients"
              text="CLIENTS"
              activeClass="active"
              smooth={defaultSmooth}
              duration={defaultDuration}
              offset={desktopOffset}
              style={{
                white: true,
                outline: true,
                text: true,
              }}
            />
            <HeaderHrefButton
              href="mailto:mail@limebrains.com"
              text="EMAIL US"
              activeClass="active"
              smooth={defaultSmooth}
              duration={defaultDuration}
              offset={desktopOffset}
              style={{
                white: true,
                outline: true,
                text: false,
              }}
            />
          </ul>
        </DesktopView>

        <MobileView>
          <nav role="navigation">
            <MenuToggle>
              <CloseIcon type="checkbox" innerRef={inputBox} onClick={inputBoxOnClick}/>
              <LineOfBurger/>
              <LineOfBurger/>
              <LineOfBurger/>
              <ul id="menu">
                <div>
                  <HeaderButton
                    to="/about"
                    text="ABOUT US"
                    onClick={handleMenuClick}
                    style={{
                      white: true,
                      outline: true,
                      text: true,
                    }}
                  />
                  <HeaderButton
                    to="/blog"
                    text="BLOG"
                    onClick={handleMenuClick}
                    style={{
                      white: true,
                      outline: true,
                      text: true,
                    }}
                  />
                  <HeaderHrefButton
                    href="https://forms.gle/RQkY962BStAm9D5eA"
                    text="CAREERS"
                    onClick={handleMenuClick}
                    style={{
                      white: true,
                      outline: true,
                      text: true,
                    }}
                  />
                  <HeaderButton
                    to="/clients"
                    text="CLIENTS"
                    activeClass="active"
                    smooth={defaultSmooth}
                    duration={defaultDuration}
                    offset={desktopOffset}
                    onClick={handleMenuClick}
                    style={{
                      white: true,
                      outline: true,
                      text: true,
                    }}
                  />
                  <HeaderHrefButton
                    href="mailto:mail@limebrains.com"
                    text="CONTACT"
                    onClick={handleMenuClick}
                    style={{
                      white: true,
                      outline: true,
                      text: false,
                    }}
                  />
                </div>
              </ul>
            </MenuToggle>
          </nav>
        </MobileView>
      </HeaderPlain>
    </HeaderWrapper>
  )
}

export default Header
