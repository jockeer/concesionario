import React from 'react';

import {Link} from 'react-router-dom'
const Automovil = ({automovil}) => {
    return ( 
        <div className="card sombra-dark">
            <div className="card-header"></div>
            
            <div className="card-body">
            <img src={`http://localhost:4000/img/${automovil.foto}.jpg`} alt=""/>               
                {automovil.modelo}
            </div>
            <div className="card-footer">
                <Link to={`/detalle-auto/${automovil.id}`}  >Ver mas</Link>
            </div>
        </div>
     );
}
 
export default Automovil;