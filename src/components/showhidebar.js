import React from 'react';
import styled from 'styled-components'
import { FaChevronDown } from 'react-icons/fa'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;


`

const Sector = styled.div`

  height: 50px;
  margin-left: 5%;
  margin-right: 5%;

  p{
    float: left;
  }
`

const Button = styled.div`
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

const Bar = ({text}) => {
  return (
    <Container>
      <Sector>
        <p>{text}</p>
        <Button>
          <FaChevronDown size={24} />
        </Button>

      </Sector>
      <Divider />
    </Container>

  )
}

export default Bar;