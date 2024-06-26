import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import { Provider } from "react-redux"
import store from './store';
import AlertTemplate from 'react-alert-template-basic';
import { positions, transitions, Provider as AlertProvider } from "react-alert"
import { HelmetProvider } from 'react-helmet-async'



const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.FADE
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </AlertProvider>
  </Provider>

);
