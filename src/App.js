import React from 'react';

import './App.css';
import HomePage from './component/homepage/HomePage'
import NavBar from './component/layouts/navbar/NavBar';
import Footer from "./component/layouts/footer/Footer"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
