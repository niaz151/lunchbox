import React from 'react';
import styled from 'styled-components';
import ContactContainer from './ContactContainer';
import HoursContainer from './HoursContainer';

class StoreCard extends React.Component{

  render(){
    return(
      <Container>
        <ContactContainer id={this.props.id} />
        <HoursContainer id={this.props.id} />
      </Container>
    )
  }
}

const Container = styled.div`
  width: 90%;
  box-shadow: 0 4px 7px 2px #b8b8b8;
  margin-top:25px;
`

export default StoreCard;