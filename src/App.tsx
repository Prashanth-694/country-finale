import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Component/header'
import AllCountries_list from './Component/all_Countries_list'
import Country from './Component/Coutry'

function App() {

  return (
    <Router>
      <Header></Header>
 
      <Switch>

        <Route exact path="/">
          <AllCountries_list />
        </Route>

        <Route  path="/countries/:name" component={Country} >
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
