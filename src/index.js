import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/App';
import { createGlobalStyle } from 'styled-components';
import {createStore} from 'redux';
import reducers from './client/redux/reducers'
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const store = createStore(
  reducers,
  composeWithDevTools()
)

ReactDOM.render(
    <Provider store={store}>
     <GlobalStyle/>
      <App/>
    </Provider>, document.getElementById('root')
);
