import React from 'react'
import { MobileView, DesktopView } from '../responsive'
import {
  HeaderButton,
  HeaderButtonScrolled,
  HeaderHrefButton,
} from '../common/header-button'
import {
  HeaderWrapper,
  LineOfBurger,
  CloseIcon,
  MenuToggle,
  defaultSmooth,
  defaultDuration,
  desktopOffset,
  mobileOffset,
} from '../common/header-styles'
import HeaderPlain from '../common/header-plain'

const inputBox = React.createRef()
const handleMenuClick = () => {
  inputBox.current.checked = false
}

const Header = props => {
  return (
    <HeaderWrapper>
      <HeaderPlain>
        <DesktopView>
          <ul>
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
            {false && (
              <HeaderButtonScrolled
                to="/#clients"
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
            )}
            <HeaderHrefButton
              text="GITHUB"
              href="https://github.com/limebrains/"
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
            <HeaderButtonScrolled
              to="team"
              text="TEAM"
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
              <CloseIcon type="checkbox" innerRef={inputBox} />
              <LineOfBurger />
              <LineOfBurger />
              <LineOfBurger />
              <ul id="menu">
                <div>
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
                  <HeaderButtonScrolled
                    to="about"
                    text="ABOUT"
                    activeClass="active"
                    smooth={defaultSmooth}
                    duration={defaultDuration}
                    offset={mobileOffset}
                    onClick={handleMenuClick}
                    style={{
                      white: true,
                      outline: true,
                      text: true,
                    }}
                  />
                  <HeaderButtonScrolled
                    to="/#clients"
                    text="CLIENTS"
                    activeClass="active"
                    smooth={defaultSmooth}
                    duration={defaultDuration}
                    offset={mobileOffset}
                    onClick={handleMenuClick}
                    style={{
                      white: true,
                      outline: true,
                      text: true,
                    }}
                  />
                  <HeaderHrefButton
                    text="GITHUB"
                    href="https://github.com/limebrains/"
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
                  <HeaderButtonScrolled
                    to="team"
                    text="TEAM"
                    activeClass="active"
                    smooth={defaultSmooth}
                    duration={defaultDuration}
                    offset={mobileOffset}
                    onClick={handleMenuClick}
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
