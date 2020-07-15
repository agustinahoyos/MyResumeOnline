import React from 'react';
import NavBar from './Components/NavBar.jsx';
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Home from './Components/Home.jsx'
import { Route } from "react-router-dom";


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />

      </header>
    </div>
  );
}

export default App;
