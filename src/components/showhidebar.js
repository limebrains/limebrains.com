import React, { useState, useRef, createRef, useEffect } from 'react';
import styled from 'styled-components'
import { FaChevronDown } from 'react-icons/fa'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const Sector = styled.div`
  max-height: ${props => props.show}px;
  margin-left: 5%;
  margin-right: 5%;
  overflow-y: hidden;
  transition: max-height 0.4s linear;
  p{
    float: left;
  }
`

const RightSector = styled.div`
  display: flex;
  float:  right;
  width:  50px;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
`

const Divider = styled.div`
  background: #D2CBCB;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 2em;
  margin-bottom: 2em;
`

const Content = styled.div`
  border-radius: 10px;
  margin-left: 5%;
  margin-right: 5%;
`

const Icon = styled(FaChevronDown)`
  transition: 0.4s;
  &:hover{
    color: green;
  }
  &.clicked{
    transform: rotate(-90deg);
  }
`

const Bar = ({ header, content, myIndex }) => {
  const [selectedIndex, setIndex] = useState({ index: '0', open: false });
  return (

    < Container >
      <Sector show={selectedIndex.open ? 500 : 50}>
        <p>{header}</p>

        <RightSector>
          <Icon className={`${selectedIndex.open ? "clicked" : ""}`} onClick={() => { setIndex({ index: myIndex, open: (selectedIndex.open ? false : true) }) }} size={24} />
        </RightSector>
        <Content  >
          <p>
            {content}
          </p>
        </Content>
      </Sector>

      <Divider />
    </Container >

  )
}

export default Bar;