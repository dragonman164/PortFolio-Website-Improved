import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/animate.css/animate.min.css';

import {HashRouter} from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
  <HashRouter>
    <App />
    </HashRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);
