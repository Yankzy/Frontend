import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
