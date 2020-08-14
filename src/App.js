import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Sidebar />
    </div>
  );
}



const Sidebar = () => {
  return (
    <aside>
      <Nav />
      <Socials />
    </aside>
  )
}

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><a href="#123">Меню 1</a></li>
        <li><a href="#123">Меню 1</a></li>
        <li><a href="#123">Меню 1</a></li>
        <li><a href="#123">Меню 1</a></li>
        <li><a href="#123">Меню 1</a></li>
      </ul>
    </nav>
  )
}


const Socials = () => {
  return (
    <ul class="socials">
      <li className="socials__item"><a href="#134" className="socials__link">Вк</a></li>
      <li className="socials__item"><a href="#134" className="socials__link">Twitter</a></li>
      <li className="socials__item"><a href="#134" className="socials__link">Youtube</a></li>
    </ul>
  );
};

export default App;
