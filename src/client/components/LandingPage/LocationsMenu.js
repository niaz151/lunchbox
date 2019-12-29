import React from 'react';
import styled from 'styled-components';
import PickupOption from './PickupOption';
import DeliveryOption from './DeliveryOption';
import StoreCard from './StoreCard';
import MenuTitle from './MenuTitle'
import MenuNav from './MenuNav';

class LocationsMenu extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      // 1, -1 TO REPRESENT BINARY MENU OPTION
      activeTab:1
    }
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
        <MenuHeader>
          <MenuTitle/>
          <MenuNav/>
        </MenuHeader>
        {this.renderMenuNavOptionComponent()}
        <CardContainer>
          <StoreCard/>
          <StoreCard/>
        </CardContainer>
      </Container>
    )
  }
}

const Container = styled.div`
  height: 100%;
  width: 32%;
  border-right:1px solid black;
  overflow-y:scroll
  

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
const MenuHeader = styled.div`
  height: 155px;
  width: 100%;
  display: flex;
  flex-direction: column;
`
const CardContainer = styled.div`
  width: 100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`

export default LocationsMenu;