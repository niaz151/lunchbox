import React from 'react';
import LocationsMenu from './LocationsMenu/index';
import styled from 'styled-components';
import Login from '../Login/index';
import {connect} from 'react-redux';

class LandingPage extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      showLoginMenu: false
    }
  }
  render(){
  
    
   
    return(
      <Container>
        <LocationsMenu/>
      </Container>
    )
  }
}

const Container = styled.div`
  height: calc(100vh - 75px);
  width: 100vw;
  display:flex;
`
function mapStateToProps(state){
  return({
    login_menu: state.login_menu
  })
}

export default connect(mapStateToProps,null)(LandingPage);