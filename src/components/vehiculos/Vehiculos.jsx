import React from 'react'
import Header from '../layout/Header';
import SideBar from '../layout/SideBar';

import Catalogo from './Catalogo'
import RegistrarVehiculos from './RegistrarVehiculos';

const Vehiculos = () => {
    return ( 
        <div className="container-app">
            <SideBar />
            <div className="container-principal">
                <Header titulo='Administracion de Vehiculos' />
                <div className="container">
                    <h2>Vehiculos</h2>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Catalogo</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Registrar</a>
                        </li>
                        
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <Catalogo />
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <RegistrarVehiculos/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Vehiculos;