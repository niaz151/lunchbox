import React from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage/index';
import Login from './components/Login/index'
import {addColorScheme} from './redux/actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import styled from 'styled-components';


class App extends React.Component{

  // FETCH COLOR SCHEME FROM DB
  componentDidMount(){
    fetch(`http://ec2-34-227-27-186.compute-1.amazonaws.com:3001/getcolorscheme?branch_id=1`)
    .then( res => res.json() )
    .then( color_scheme => this.props.addColorScheme(color_scheme))
  }

  render(){

     // RENDER LOGIN MENU IF CLICKED
    if(this.props.login_menu_visibility === true){
      return (
        <Container>
          <Header/>
          <LandingPage/>
          <Login/>
        </Container>
      );
    }
    else{
      return (
        <Container>
          <Header/>
          <LandingPage/>
        </Container>
      );
    }
  }
}

const Container = styled.div`
  position:relative;
`

function mapStateToProps(state){
  return({
    login_menu_visibility: state.login_menu.isVisible
  })
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    addColorScheme: addColorScheme
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
