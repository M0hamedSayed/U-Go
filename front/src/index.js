<<<<<<< Updated upstream
import React from 'react';
=======
import React, { Suspense } from 'react';
>>>>>>> Stashed changes
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< Updated upstream
=======
import './i18n/i18n'
import { Provider } from 'react-redux';
import store from './Store/store';
import { BrowserRouter } from 'react-router-dom';
>>>>>>> Stashed changes

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< Updated upstream
    <App />
=======
    <Provider store={store}>
      <Suspense fallback="<div>loading....</div>">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </Provider>
>>>>>>> Stashed changes
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
