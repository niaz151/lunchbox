import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

class HoursContainer extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      pickup_hours: [],
      store_hours: [],
      pickupActive:1,
      storeActive: 1
    }
  }

  componentDidMount(){
    Promise.all([
      fetch(`http://ec2-34-227-27-186.compute-1.amazonaws.com:3001/getPickupHours?branch_id=${this.props.id}`).then( res => res.json()),
      fetch(`http://ec2-34-227-27-186.compute-1.amazonaws.com:3001/getStoreHours?branch_id=${this.props.id}`).then( res => res.json())
    ])
    .then ( ([pickup_hours, store_hours]) => {
      this.setState({
        pickup_hours: pickup_hours,
        store_hours: store_hours
      })
    })
  }

  getDayString(num){
    switch(num){
      case 0 : return 'Sun'
      case 1 : return 'Mon'
      case 2 : return'Tues'
      case 3 : return 'Wed'
      case 4 : return 'Thurs'
      case 5 : return 'Fri'
      case 6 : return 'Sat'
      default:
        break;
    }
  }

  renderDailyHours = (type) => {

    var hours, output
    var day_num = new Date().getDay();
    var day_word = this.getDayString(day_num);

    (type === 'pickup') ? hours = this.state.pickup_hours : hours = this.state.store_hours

    if(hours.length > 0)(
      output = 
        <Hours>
          <HoursText> {day_word}: {hours[day_num][day_word].open} - {hours[day_num][day_word].close} </HoursText>
        </Hours>
    )
    return output
  }
  

  renderAllHours = (type) => {

    var hours, day_word
    var output = [];

    (type === 'pickup' ? hours = this.state.pickup_hours : hours = this.state.store_hours)

    if(hours.length > 0){
      for(var i = 0; i < hours.length; i++){
        day_word = this.getDayString(i)
        output.push(<HoursText> {day_word}: {hours[i][day_word].open} - {hours[i][day_word].close} </HoursText>)
      }
    }

    return(
      <Hours>
        {output}
      </Hours>
    )
  }


  // ADJUST STATE WHEN LABEL CLICKED
  handleLabelClick = (type) => {
    if(type === 'pickup'){
      var curr_hours = this.state.pickupActive
      this.setState({pickupActive: -curr_hours})
    }
    else{
      var curr_hours = this.state.storeActive
      this.setState({storeActive: -curr_hours})
    }
  }


  // RENDER ARROW TYPE DEPENDING ON BINARY STATE
  renderCustomLabel = (text,type) => {

    var arrow_status

    (type === 'pickup' ? arrow_status = this.state.pickupActive : arrow_status = this.state.storeActive)

    return(
      <Label onClick={type === 'pickup' ?  () => this.handleLabelClick('pickup') :  () => this.handleLabelClick('store') } >
        <CustomText color={this.props.color_scheme['tertiary']}> {text} </CustomText>
        { (arrow_status === 1) ? <ArrowLeft/> :  <ArrowDown/>}
      </Label>
    )
  }


  render(){
    return (
      <Container>
        {this.renderCustomLabel('PICKUP HOURS', 'pickup')}
        {this.state.pickupActive === 1 ? this.renderDailyHours('pickup') : this.renderAllHours('pickup')}
        {this.renderCustomLabel('STORE HOURS', 'store')}
        {this.state.storeActive === 1 ? this.renderDailyHours('store') : this.renderAllHours('store') }
      </Container>
    )
  }
}

const Container = styled.div`
  width: 100%;
  background-color:white;
  padding-top:5px;
  padding-bottom:10px;
`

const Label = styled.div`
  height: 30px;
  width: calc(100%-30px);
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding-left: 15px;
  padding-right: 15px;
  cursor:pointer;
`

const CustomText = styled.div`
  font-family:'Lato',sans-serif;
  font-size: 16px;
  color: ${props => props.color} ;
  font-weight: bold;
`
const Hours = styled.div`
  width: calc(100%-30px);
  padding-left: 15px;
  display:flex;
  flex-direction:column;
  align-items:center;
`
const HoursText = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  color: #707070;
  height: 25px;
  display: flex;
  align-items:center;
  justify-content:center;
  align-self: flex-start;
`
const Arrow = styled.i`
  border: solid #565656;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
`
const ArrowLeft = styled(Arrow)`
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`
const ArrowDown = styled(Arrow)`
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`

function mapStateToProps(state){
  return({
    color_scheme:state.color_scheme
  })
}

export default connect(mapStateToProps,null)(HoursContainer);