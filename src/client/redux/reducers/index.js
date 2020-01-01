import {combineReducers} from 'redux';
import colorSchemeReducer from './colorSchemeReducer';

export default combineReducers({
  color_scheme: colorSchemeReducer
})