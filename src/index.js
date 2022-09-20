import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import GlobalStyles from './components/GlobalStyles';
import { CityProvider } from './Contexts/CityContext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <GlobalStyles>
      <CityProvider>
        <App />
      </CityProvider>
    </GlobalStyles>
  </React.StrictMode>
);

