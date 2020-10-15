import React from 'react';
import Header from '../layout/Header';
import Sidebar from '../layout/SideBar'
import NuevaVenta from './NuevaVenta';
const Ventas = () => {
    return ( 
        <div className="container-app">
            <Sidebar />
            <div className="container-principal">
                <Header titulo='Administrador de Ventas' /> 
                <div className="container">
                    <h2>Ventas</h2>   
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Vender</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Registrar</a>
                        </li>
                        
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <NuevaVenta/>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            {/* <RegistrarVehiculos/> */}
                        </div>
                        
                    </div> 
                </div>               
            </div>
        </div>
     );
}
 
export default Ventas;