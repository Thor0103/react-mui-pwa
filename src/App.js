import React from 'react';
import './App.css';
import Router from './routes';
import ThemeProvider from './theme';


function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Router />    
      </div>
    </ThemeProvider>
  );
}

export default App;
