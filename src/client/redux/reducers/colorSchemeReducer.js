var initial_state = []

export default (state = initial_state, action) => {
  switch(action.type){
    case 'ADD_COLOR_SCHEME':
      return JSON.parse(action.payload)['color_scheme']
    default:
      return state
  }
}

