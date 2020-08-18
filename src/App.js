import React from 'react';
import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="content">
          <Sidebar />
          <main>
            <div className="main-inner">
              <Route path="/dialogs" component={Dialogs} />
              <Route path="/profile" component={Profile} />
              <Route path="/news" component={News} />
              <Route path="/music" component={Music} />
              <Route path="/settings" component={Settings} />
            </div>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
