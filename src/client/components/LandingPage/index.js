import React from 'react';
import LocationsMenu from './LocationsMenu/index';
import LocationsMaps from './LocationsMap/index';
import styled from 'styled-components';

class LandingPage extends React.Component{

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

export default LandingPage;