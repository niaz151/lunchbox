import React from 'react';
import styled from 'styled-components';

class LocationsMenu extends React.Component{

  render(){
    return(
      <Container>
        Locations Menu
      </Container>
    )
  }
}

const Container = styled.div`
  height: 100%;
  width: 32%;
  border:1px solid black;

  @media(max-width: 750px){
    width: 100vw;
  }
`

export default LocationsMenu;