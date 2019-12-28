import React from 'react';
import styled from 'styled-components';

class LocationsMenu extends React.Component{

  render(){
    return(
      <Container>
        <MenuDescription>
          <MenuDescHero>
            <MenuDescSpan> FIND YOUR NEAREST </MenuDescSpan>
            <MenuDescSpan> 16 HANDLES! </MenuDescSpan>
          </MenuDescHero>
          <MenuDescOptions>
            <MenuNavBar>
              <MenuNavSpan active={true} > PICKUP </MenuNavSpan>
              <MenuNavSpan active={false} > DELIVERY </MenuNavSpan>
            </MenuNavBar>
          </MenuDescOptions>
        </MenuDescription>
      </Container>
    )
  }
}

const Container = styled.div`
  height: 100%;
  width: 32%;
  border-right:1px solid black;

  @media(max-width: 750px){
    width: 100vw;
  }
`
const MenuDescription = styled.div`
  height: 275px;
  width: 100%;
  box-shadow: 0 4px 2px -2px gray;
  display: flex;
  flex-direction: column;
`
const MenuDescHero = styled.div`
  height: 40%;
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items:flex-start;
  justify-content: center;
`
const MenuDescSpan = styled.div`
  margin-left: 10px;
  font-family: 'Lato',sans-serif;
  font-size:24px;
  font-weight:700;
  color: #565656;
  margin-top:10px;
`
const MenuDescOptions = styled.div`
  height: 60%;
  width: 100%;
`

const MenuNavBar = styled.div`
  height: 50px;
  width: 100%;
  display:flex;
  align-items:center;
  justify-content:center;
`

const MenuNavSpan = styled.div`
  height: 100%;
  width: 48%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${ props => props.active === true ? "#E8467F" : "#717171" };
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  border-bottom: ${props => props.active === true ? "4px solid #E8467F" : "1px inset #D4E2D4"}
  cursor: pointer;
`

export default LocationsMenu;