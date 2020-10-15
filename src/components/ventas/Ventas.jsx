import React,{Fragment} from 'react';
import Header from '../layout/Header';
import Sidebar from '../layout/SideBar'
const Ventas = () => {
    return ( 
        <div className="container-app">
            <Sidebar />
            <div className="container-principal">
                <Header titulo='Administrador de Ventas' />                
            </div>
        </div>
     );
}
 
export default Ventas;