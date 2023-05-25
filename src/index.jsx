import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import Router from './pages/router/Router';
//redux
import { Provider } from 'react-redux';
import store from './redux/store';

//redux-persist

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
