import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {connect} from 'react-redux';

class ContactContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      name:'',
      phone_num:'',
      address:'',
      city:'',
      state_initials:'',
      zip_code:'',
      pickup_hours:[],
      store_hours:[]
    }
  }

  // DO ALL REQUIRED DB REQUESTS AND POPULATE STATE WITH DATA
  componentDidMount(){
    Promise.all([
      fetch(`http://ec2-34-227-27-186.compute-1.amazonaws.com:3001/getname?branch_id=${this.props.id}`).then( res => res.json()), 
      fetch(`http://ec2-34-227-27-186.compute-1.amazonaws.com:3001/getphonenumber?branch_id=${this.props.id}`).then( res => res.json()),
      fetch(`http://ec2-34-227-27-186.compute-1.amazonaws.com:3001/getaddress?branch_id=${this.props.id}`).then( res => res.json()),
      fetch(`http://ec2-34-227-27-186.compute-1.amazonaws.com:3001/getcity?branch_id=${this.props.id}`).then( res => res.json()),
      fetch(`http://ec2-34-227-27-186.compute-1.amazonaws.com:3001/getstate?branch_id=${this.props.id}`).then( res => res.json()),
      fetch(`http://ec2-34-227-27-186.compute-1.amazonaws.com:3001/getZipCode?branch_id=${this.props.id}`).then( res => res.json()),
      fetch(`http://ec2-34-227-27-186.compute-1.amazonaws.com:3001/getPickupHours?branch_id=${this.props.id}`).then( res => res.json()),
      fetch(`http://ec2-34-227-27-186.compute-1.amazonaws.com:3001/getStoreHours?branch_id=${this.props.id}`).then( res => res.json())
    ])
    .then( ([name, phone_num, address, city, state, zip_code, pickup_hours, store_hours ]) => this.setState({
      name:name,
      phone_num: phone_num,
      address: address,
      city: city,
      state_initials: state,
      zip_code: zip_code,
      pickup_hours: pickup_hours, 
      store_hours: store_hours
    }))
    .catch( err => console.log(err))                                  
  }

  render(){

    return(
      <Container>
        <TitleContainer>
          <CustomTitle color={this.props.color_scheme['primary']}> {this.state.name} </CustomTitle>
          <CustomBtn tabindex="1" type='button' color={this.props.color_scheme['secondary']} > ORDER </CustomBtn> 
        </TitleContainer>
        <PhoneContainer>
          <CustomPhoneNum> {this.state.phone_num} </CustomPhoneNum> 
        </PhoneContainer>
        <AddressContainer>
          <CustomText> {this.state.address} </CustomText> 
          <CustomText> {this.state.city}, {this.state.state_initials} {this.state.zip_code} </CustomText> 
        </AddressContainer>
      </Container>
  )}
}

const Container = styled.div`
  height: 165px;
  width: 100%;
  background-color:white;
  border-bottom: 1.5px solid #E3E3E3;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`

const TitleContainer = styled.div`
  height: 30%;
  width: calc(100% - 30px);
  display:flex;
  align-items:center;
  margin-top:20px;
  justify-content: space-between;
`

const CustomTitle = styled.div`
  color: ${props => props.color};
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight: bold;
`
const CustomBtn = styled.div`
  height: 35px;
  width: 112px;
  border: 3px solid ${props => props.color};
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  border-radius: 4px;
  font-family: 'Lato', sans-serif;
  color: ${props => props.color};
  font-weight:bold;

  &:hover{
    background-color: #565656;
    color:white;
  }
`
const PhoneContainer = styled.div`
  height: 20%;
  width: calc(100% - 30px);
  position:relative;
  display:flex;
  align-items:center;
  margin-top:10px;
`
const CustomPhoneNum = styled.div`
  font-family:'Lato',sans-serif;
  font-size: 14px;
  position:absolute;
  left:0;
`
const AddressContainer = styled.div`
  height: 35%;
  width: calc(100% - 30px);
  display;flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin-top:10px;
`
const CustomText = styled.div`
  font-family:'Lato',sans-serif;
  font-size:14px;
`

function mapStateToProps(state){
  return({
    color_scheme:state.color_scheme
  })
}

export default connect(mapStateToProps,null)(ContactContainer);