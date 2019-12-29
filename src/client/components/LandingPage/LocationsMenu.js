import React from 'react';
import styled from 'styled-components';
import PickupOption from './PickupOption';
import DeliveryOption from './DeliveryOption';
class LocationsMenu extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      // 1, -1 TO REPRESENT BINARY MENU OPTION
      activeTab:1
    }
  }

  // MODULAR MENU TITLE RENDER
  renderMenuTitle = () => (
    <MenuDescHero>
      <MenuDescSpan> FIND YOUR NEAREST </MenuDescSpan>
      <MenuDescSpan> 16 HANDLES! </MenuDescSpan>
    </MenuDescHero>
  )

  // MODULAR MENU NAV RENDER
  renderMenuNavOptions = () => {
    return(
      <MenuDescOptions>
        <MenuNavBar>
          <MenuNavSpan active={this.state.activeTab === 1} onClick={() => this.handleMenuNav(1)}> PICKUP </MenuNavSpan>
          <MenuNavSpan active={this.state.activeTab === -1} onClick={() => this.handleMenuNav(-1)}> DELIVERY </MenuNavSpan>
        </MenuNavBar>
      </MenuDescOptions>
    )
  }

  renderMenuNavOptionComponent = (type) => {
    return this.state.activeTab === 1 ? <PickupOption/> : <DeliveryOption/>
  }

  // SET STATE TO CLICKED MENU NAV
  handleMenuNav = (tab_num) => {
    if(this.state.activeTab !== tab_num){
      this.setState({activeTab:tab_num})
    }
  }

  render(){

    return(
      <Container>
        <MenuDescription>
          {this.renderMenuTitle()}
          {this.renderMenuNavOptions()}
        </MenuDescription>
        {this.renderMenuNavOptionComponent()}
      </Container>
    )
  }
}

const Container = styled.div`
  height: 100%;
  width: 32%;
  border-right:1px solid black;

  @media(max-width: 1200px){
    width: 50vw;
  }

  @media(max-width: 1050px){
    width: 65vw;
  }

  @media(max-width: 750px){
    width: 100vw;
  }

`
const MenuDescription = styled.div`
  height: 155px;
  width: 100%;
  display: flex;
  flex-direction: column;
`
const MenuDescHero = styled.div`
  height: 60%;
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items:flex-start;
  justify-content: center;
`
const MenuDescSpan = styled.div`
  margin-left: 15px;
  font-family: 'Lato',sans-serif;
  font-size:24px;
  font-weight:700;
  color: #565656;
  margin-top:10px;
`
const MenuDescOptions = styled.div`
  height: 40%;
  width: 100%;
  display:flex;
  position:relative;
`

const MenuNavBar = styled.div`
  height: 50px;
  width: 100%;
  display:flex;
  align-items:center;
  justify-content:center;
  position:absolute;
  bottom:0;
`

const MenuNavSpan = styled.div`
  height: 100%;
  width: 50%;
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