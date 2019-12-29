import React from 'react';
import styled from 'styled-components';

class MenuNav extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      activeTab:1
    }
  }

    // SET STATE TO CLICKED MENU NAV
    handleClick = (tab_num) => {
      if(this.state.activeTab !== tab_num){
        this.setState({activeTab:tab_num})
      }
    }
  
  render(){
    return(
      <MenuDescOptions>
        <MenuNavBar>
          <MenuNavSpan active={this.state.activeTab === 1} onClick={() => this.handleClick(1)}> PICKUP </MenuNavSpan>
          <MenuNavSpan active={this.state.activeTab === -1} onClick={() => this.handleClick(-1)}> DELIVERY </MenuNavSpan>
        </MenuNavBar>
      </MenuDescOptions>
    )
  }
}

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
  border-bottom: ${props => props.active === true ? "4px solid #E8467F" : "1px inset #D4E2D4"};
  cursor: pointer;
`

export default MenuNav;