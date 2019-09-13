import React, {useState} from 'react';
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

const RightSector = styled.div`
  display: flex;
  float:  right;
  width:  50px;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  
`

const Button = styled.div`
  
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
  display: flex;
  border-radius: 10px;
  background-color: white;
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
`


const Accordion = (props ) => {
  console.log(props)

}


const Bar = ({header, index}) => {

  const [selectedIndex, setIndex] = useState(0);

  return (
      <Container>
        <Sector>
          <p>{header}</p>
          <RightSector>
              <FaChevronDown onClick={() => setIndex(index)} size={24} />
              {console.log({'expand': selectedIndex})}
          </RightSector>
        </Sector>
        <Content>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Content>
        <Divider />
      </Container>

  )
}

export default Bar;