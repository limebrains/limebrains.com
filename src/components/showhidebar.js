import React, { useState } from 'react'
import styled from 'styled-components'
import { FaChevronDown } from 'react-icons/fa'
import { mobileLandscape } from './responsive'
import { colors } from './theme/colors'

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  user-select: none;

  @media (max-width: ${mobileLandscape}px) {
    font-size: 1em;
  }
`

const Sector = styled.div`
  max-height: ${props => props.show}px;
  margin-left: 5%;
  margin-right: 5%;
  overflow-y: hidden;
  transition: max-height 0.4s linear;
  cursor: pointer;
  p {
    float: left;
  }
`

const RightSector = styled.div`
  position: absolute;
  right: 5%;
  top: 0;
`

const Divider = styled.div`
  background: #d2cbcb;
  margin: 2em 5%;
`

const Content = styled.div`
  padding: 3rem;
  transition: all 0.2s ease-in-out;
  border: 1px solid #9c9595;
  background: ${colors.sections.lightSection};
  margin-top: 2rem;
  line-height: 1.8;
`

const Icon = styled(FaChevronDown)`
  transition: 0.4s;
  height: 100%;
  &:hover {
    color: green;
  }
  &.clicked {
    transform: rotate(-90deg);
  }
`

const Bar = ({header, content, myIndex}) => {
  const [selectedIndex, setIndex] = useState({index: '0', open: false})
  const toggle = () => setIndex({index: myIndex, open: !selectedIndex.open})
  return (
    <Container>
      <Sector show={selectedIndex.open ? 500 : 50} onClick={toggle}>
        <div>{header}</div>
        {selectedIndex.open && <Content>{content}</Content>}

        <RightSector>
          <Icon
            className={`${selectedIndex.open ? 'clicked' : ''}`}
            size={24}
          />
        </RightSector>
      </Sector>

      <Divider/>
    </Container>
  )
}

export default Bar
