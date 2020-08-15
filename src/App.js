import React from 'react';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Banner from './Banner/Banner';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Sidebar />
        <main>
          <div className="main-inner">
            <Banner />
            <div className="info">
              <div className="info__logo">
                <img src="http://placekitten.com/150/150" className="info__img"/>
              </div>
              <div className="info__text">
                <h2>Barsik M.</h2>
                <p>Date of Birth: 2 january</p>
                <p>Education: gratefull</p>
                <p>Web site: bydex.ru</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
