import React from 'react'; 
import Page from './components/Page';
import ThemeContextProvider from './components/ThemeContext';
import './App.css';

const App = () => {
  return (
    <ThemeContextProvider>
      <Page />
    </ThemeContextProvider>
  );
};

export default App;
