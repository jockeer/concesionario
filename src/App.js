import React from 'react';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/Home'
import Login from './components/auth/Login'
import Vehiculos from './components/vehiculos/Vehiculos';
import DetalleAutomovil from './components/vehiculos/DetalleAutomovil';
import Ventas from './components/ventas/Ventas';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/vehiculos" component={Vehiculos} />
        <Route exact path="/detalle-auto/:id" component={DetalleAutomovil} />
        <Route exact path="/ventas" component={Ventas} />
      </Switch>
    </Router>
    
  );
}

export default App;
