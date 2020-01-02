var initial_state = {
  isVisible: false
}

export default (state = initial_state, action) => {
  switch(action.type){
    
    case 'SHOW_LOGIN_MENU':
      var new_state = {...state}
      if(new_state.isVisible != true){
        new_state.isVisible = true
      }
      return new_state

    default:
      return state
  }
}