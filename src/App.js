import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';  
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home';
import Apoio from './components/Apoio/Apoio';
import Login from './components/Login/Login';
import Cadastro from './components/Cadastro/Cadastro';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/#/" component={Home} />
        <Route path="/Apoio" component={Apoio} />
        <Route path="/Login" component={Login} />
        <Route path="/Cadastro" component={Cadastro} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
