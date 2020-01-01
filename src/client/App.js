import React from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage/index';
import {getColorScheme} from './redux/actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class App extends React.Component{

  componentDidMount(){
    this.props.getColorScheme()
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
    getColorScheme: getColorScheme
  }, dispatch)
}

export default connect(null, matchDispatchToProps)(App);
