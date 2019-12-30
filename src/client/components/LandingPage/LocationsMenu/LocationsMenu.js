import React from 'react';
import styled from 'styled-components';
import PickupOption from './MenuNav/PickupOption';
import DeliveryOption from './MenuNav/DeliveryOption';
import StoreCard from '../StoreCard/StoreCard';
import MenuTitle from './MenuTitle'
import MenuNav from './MenuNav/MenuNav';

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
  handleMenuNav = () => {
    var curr_tab = this.state.activeTab
    this.setState({activeTab:-curr_tab})
  }

  render(){

    return(
      <Container>
        <MenuHeader>
          <MenuTitle/>
          <MenuNav handleNav={() => this.handleMenuNav()} curr_tab={this.state.activeTab} />
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
  overflow-y:scroll;

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
  background-color: #EFF1F4;
  padding-bottom: 20px;
`

export default LocationsMenu;