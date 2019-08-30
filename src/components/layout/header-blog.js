import React from 'react';
import { MobileView, DesktopView } from '../responsive'
import { HeaderButton } from '../common/header-button'
import {
        HeaderWrapper,
        LineOfBurger,
        CloseIcon,
        MenuToggle,
} from '../common/header-styles';
import HeaderPlain from '../common/header-plain';

const inputBox = React.createRef()


const Header = () => {
  return (
	<HeaderWrapper>
		<HeaderPlain>
			<DesktopView>
				<ul>
                    <HeaderButton
                            to="/"
							text="HOME"
							style={{
								white: true,
								outline: true,
								text: true
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
                            <HeaderButton 
                                    to="/"
									text="HOME"
									style={{
										white: true,
										outline: true,
										text: true
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
