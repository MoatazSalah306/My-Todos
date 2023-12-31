import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import { Provider } from 'react-redux';
import { store } from './rtk/store';
import { PersistGate } from 'redux-persist/integration/react'; 
import { persistStore } from 'redux-persist';

const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor = persistStore(store);

root.render(
  <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor} >
          <App />
        </PersistGate>
      </Provider>
  </React.StrictMode>
);


reportWebVitals();
