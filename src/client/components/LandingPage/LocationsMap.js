import React from 'react';
import styled from 'styled-components';

class LocationsMap extends React.Component{

  render(){
    return(
      <Container>
        Locations Map
      </Container>
    )
  }
}

const Container = styled.div`
  height: 100%;
  width: 68%;
  border:1px solid black;
  
  @media(max-width: 750px){
    display:none;
  }
`

export default LocationsMap;