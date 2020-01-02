var initial_state = {
  isVisible: false,
  activeComponent: 1
}

export default (state = initial_state, action) => {
  switch(action.type){
    
    case 'SHOW_LOGIN_MENU':
      var new_state = {...state}
      new_state.isVisible = true
      return new_state
      
    case 'HIDE_LOGIN_MENU':
      var new_state = {...state}
      new_state.isVisible = false
      return new_state

    case 'RENDER_LOGIN_COMPONENT':
      var new_state = {...state}
      new_state.activeComponent = action.payload
      return new_state

    default:
      return state
  }
}