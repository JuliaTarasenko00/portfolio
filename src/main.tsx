import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.tsx';
import './globalStyle.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/profile">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
