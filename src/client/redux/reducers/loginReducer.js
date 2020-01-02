var initial_state = {
  isLoggedIn: false
}

export default (state = initial_state, action) => {
  switch(action.type){
    
    case 'HANDLE_LOGIN':
    console.log('i ran')  
    var new_state = {...state}
      new_state.isLoggedIn = action.payload
      return new_state

    default:
      return state
  }
}