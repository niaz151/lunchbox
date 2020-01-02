export const addColorScheme = (scheme) => {
  return({
    type:'ADD_COLOR_SCHEME',
    payload: scheme
  })
}

export const showLoginMenu = () => {
  return({
    type: 'SHOW_LOGIN_MENU',
    payload: true
  })
}

export const hideLoginMenu = () => {
  return({
    type: 'HIDE_LOGIN_MENU',
    payload: false
  })
}