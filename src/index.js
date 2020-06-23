import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from 'components/App';
import 'index.css';

const root = document.querySelector('#root');
const toRender = (
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

ReactDOM.render(toRender, root);
