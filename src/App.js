import React from 'react';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/Home'
import Login from './components/auth/Login'
import Vehiculos from './components/vehiculos/Vehiculos';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/vehiculos" component={Vehiculos} />
      </Switch>
    </Router>
    
  );
}

export default App;
