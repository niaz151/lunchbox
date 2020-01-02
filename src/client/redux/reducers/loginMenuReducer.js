var initial_state = {
  isVisible: false
}

export default (state = initial_state, action) => {
  switch(action.type){
    
    case 'SHOW_LOGIN_MENU':
      var new_state = {...state}
      new_state.isVisible = true
      return new_state
      
    case 'HIDE_LOGIN_MENU':
      console.log('hiden')
      var new_state = {...state}
      new_state.isVisible = false
      return new_state

    default:
      return state
  }
}