import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './components/store/store';
axios.defaults.baseURL =  "https://jds-production.up.railway.app/";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
)
