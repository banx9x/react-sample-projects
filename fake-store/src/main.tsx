import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import worker from 'mocks/browser';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';

worker.start({
  onUnhandledRequest: 'bypass',
});

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
