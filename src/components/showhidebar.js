import React, { useState } from 'react';
import styled from 'styled-components'
import { FaChevronDown } from 'react-icons/fa'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;


`

const Sector = styled.div`
  height: ${props => props.show}px;
  margin-left: 5%;
  margin-right: 5%;
  overflow-y: hidden;
  transition: height 0.4s linear;
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
  height: 1px;
  background: #D2CBCB;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 2em;
  margin-bottom: 2em;
`

const Content = styled.div`
  display: ${props => props.show};
  border-radius: 10px;
  background-color: white;
  margin-left: 5%;
  margin-right: 5%;
  p{
    padding-left: 2em;
    padding-right: 2em;
  }
`


const Icon = styled(FaChevronDown)`
  &:hover{
    color: green;
  }

  &.icon{
    background
    font-size: 100px;
  }
`


const Bar = ({ header, content, myIndex }) => {
  const [selectedIndex, setIndex] = useState({ index: '0', open: false });
  return (
    <Container>
      <Sector show={selectedIndex.open ? 200 : 50}>
        <p>{header}</p>

        <RightSector>

          <Icon onClick={() => setIndex({ index: myIndex, open: (selectedIndex.open ? false : true) })} size={24} />
          {console.log(selectedIndex)}
        </RightSector>
        <Content >
          <p>
            {content}
          </p>
        </Content>
      </Sector>

      <Divider />
    </Container>

  )
}

export default Bar;