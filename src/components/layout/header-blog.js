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

const inputBox = React.createRef()
const handleMenuClick = () => {
  inputBox.current.checked = false
  document.body.style.overflow = "auto"
}
const inputBoxOnClick = (e) => {
  if (e.target.checked) {
    document.body.style.overflow = "hidden"
  }
  else {
    document.body.style.overflow = "auto"
  }
}

const Header = () => {
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
            <HeaderHrefButton
              text="JOBS"
              href="https://forms.gle/676Dcwo98LEYcPWy7"
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
            <HeaderButton
              to="/team"
              text="TEAM"
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

              <LineOfBurger />
              <LineOfBurger />
              <LineOfBurger />
              <ul id="menu">
                <div>
                  <HeaderHrefButton
                    href="https://drift.me/mail12/meeting"
                    target={"_blank"}
                    text="MEET US"
                    activeClass="active"
                    smooth={defaultSmooth}
                    duration={defaultDuration}
                    offset={desktopOffset}
                    onClick={handleMenuClick}
                    style={{
                      white: true,
                      outline: true,
                      text: false,
                    }}
                  />
                  <HeaderHrefButton
                    text="JOBS"
                    href="https://forms.gle/676Dcwo98LEYcPWy7"
                    target={"_blank"}
                    style={{
                      white: true,
                      outline: true,
                      text: true,
                    }}
                  />
                  <HeaderHrefButton
                    text="GITHUB"
                    href="https://github.com/limebrains/"
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
                  <HeaderButton
                    to="/team"
                    text="TEAM"
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
