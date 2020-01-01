import {combineReducers} from 'redux';
import colorSchemeReducer from './colorSchemeReducer';

export default combineReducers({
  colorScheme: colorSchemeReducer
})