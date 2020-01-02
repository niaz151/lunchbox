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

export const renderLoginComponent = (type) => {
  return({
    type: 'RENDER_LOGIN_COMPONENT',
    payload: type
  })
}

export const handleLogin = (val) => {
  return({
    type: 'HANDLE_LOGIN',
    payload: val
  })
}