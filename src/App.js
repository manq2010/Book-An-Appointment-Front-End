import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes';
import GlobalStyle from './styles/GlobalStyles';

const App = () => (
  <div className="app">
    <GlobalStyle />
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </div>
);

export default App;
