import {combineReducers} from 'redux';
import colorSchemeReducer from './colorSchemeReducer';
import loginMenuReducer from './loginMenuReducer';

export default combineReducers({
  color_scheme: colorSchemeReducer,
  login_menu: loginMenuReducer
})