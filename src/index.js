import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/react-bootstrap/dist/react-bootstrap"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './LoginPages/LoginContext';

import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
  <BrowserRouter>
   <App />
  </BrowserRouter>
   </AuthProvider>
);


