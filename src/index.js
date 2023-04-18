import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './index.css';
import App from './pages/app/App';
import { WordContextProvider } from './Context/MyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   < WordContextProvider >
    <App />
    </WordContextProvider>
  </React.StrictMode>
);

