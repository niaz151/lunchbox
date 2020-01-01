import React from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage/index';
import {addColorScheme} from './redux/actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class App extends React.Component{

  componentDidMount(){
    fetch(`http://ec2-34-227-27-186.compute-1.amazonaws.com:3001/getcolorscheme?branch_id=1`)
    .then( res => res.json() )
    .then( color_scheme => this.props.addColorScheme(color_scheme))
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <LandingPage/>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    addColorScheme: addColorScheme
  }, dispatch)
}

export default connect(null, matchDispatchToProps)(App);
