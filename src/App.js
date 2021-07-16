import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Contatos from './Pages/Contatos';
import Home from './Pages/Home';
import MoreAbout from './Pages/MoreAbout';
import MyNetworks from './Pages/MyNetworks';
import Projects from './Pages/Projects';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={ Home }/>
        <Route path="/projects" component={ Projects }/>
        <Route path="/contacts" component={ Contatos } />
        <Route path="/moreabout" component={ MoreAbout }/>
        <Route path="/mynetworks" component={ MyNetworks }/>
      </BrowserRouter>
    </div>
  );
}

export default App;
