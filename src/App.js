import React from 'react';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;
