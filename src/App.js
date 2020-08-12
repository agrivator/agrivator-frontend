import React from 'react';
import {Switch,Route} from 'react-router-dom'


import Home from './Home'
import Login from './Login'
import Default from './components/Default'
import { PrivateRoute } from './helpers/PrivateRoute'

function App() {
  return (
    <div className="App">
        <Switch>
          <PrivateRoute exact path="/home" component={Home} />
          <Route  path="/login" component={Login} />
          <Route  component={Default} />
        </Switch>
    </div>
  );
}

export default App;
