import React from 'react'

import { Link } from 'react-router-dom'

const SideBar = () => {
    return ( 
        <aside>
            <h2>ADMINISTRACION<span> Beautiful Car</span></h2>
            <h1>MENU</h1>
            <ul>
                <Link to="/vehiculos" className="text-light"><li><i className="large material-icons">airport_shuttle</i>VEHICULOS</li></Link>
                <Link to="/ventas"><li><i className="large material-icons">monetization_on</i>VENTAS</li></Link>
                <Link to="/reportes"><li><i className="large material-icons">assignment</i>REPORTES</li></Link>
                <Link to="/"><li><i className="large material-icons">arrow_back</i>Cerrar Sesion</li></Link>
            </ul>
            
        </aside>
     );
}
 
export default SideBar;