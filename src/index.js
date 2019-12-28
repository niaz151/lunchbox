import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

ReactDOM.render(<React.Fragment>
                  <GlobalStyle/>
                  <App/>
                </React.Fragment>, document.getElementById('root'));
