import React from 'react';
import styled from 'styled-components';

import {connect} from 'react-redux';

class MenuTitle extends React.Component{
 
  render(){
   return(
    <MenuDescHero>
      <MenuDescSpan color={this.props.color_scheme['secondary']}> FIND YOUR NEAREST </MenuDescSpan>
      <MenuDescSpan color={this.props.color_scheme['secondary']}> 16 HANDLES! </MenuDescSpan>
    </MenuDescHero>
   ) 
  }
}

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
  color:  ${props => props.color};
  margin-top:10px;
`

function mapStateToProps(state){
  return({
    color_scheme: state.color_scheme
  })
}


export default connect(mapStateToProps,null)(MenuTitle);