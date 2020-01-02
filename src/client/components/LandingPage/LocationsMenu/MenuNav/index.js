import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

class MenuNav extends React.Component {


  // CLICK HANDLER AND PARENT CALLBACK
  handleClick = (tab_num) => {
    if(this.props.curr_tab !== tab_num){
      this.props.handleNav()
    }
  }
  
  render(){
    return(
      <MenuDescOptions>
        <MenuNavBar>
          <MenuNavSpan 
            active={this.props.curr_tab === 1}
            active_color={this.props.color_scheme['primary']} 
            inactive_color='#717171'
            onClick={() => this.handleClick(1)} 
          > 
            PICKUP 
          </MenuNavSpan>
          <MenuNavSpan 
            active={this.props.curr_tab === -1} 
            active_color={this.props.color_scheme['primary']} 
            inactive_color='#717171'
            onClick={() => this.handleClick(-1)}
          > 
          DELIVERY 
          </MenuNavSpan>
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
  color: ${ props => props.active === true ? props.active_color : props.inactive_color };
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  border-bottom: ${props => props.active === true ? `4px solid ${props.active_color}` : "2px inset #D4E2D4"};
  cursor: pointer;
  font-weight: 600;
`

function mapStateToProps(state){
  return({
    color_scheme: state.color_scheme
  })
}

export default connect(mapStateToProps,null)(MenuNav);