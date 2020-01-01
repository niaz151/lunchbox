export const getColorScheme = (store_id) => {
  return({
    type:'GET_COLOR_SCHEME',
    payload: store_id
  })
}