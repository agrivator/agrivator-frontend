import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'


import Home from './Home'
import Login from './Login'
import Default from './components/Default'

function App() {
  return (
    <React.Fragment>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route  path="/login" component={Login} />
          <Route  component={Default} />
        </Switch>
    </React.Fragment>
  );
}

export default App;
