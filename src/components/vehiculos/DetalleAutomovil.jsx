import React,{Fragment} from 'react'
import Header from '../layout/Header'

const DetalleAutomovil = ({match}) => {
    return ( 
        <Fragment>
            <Header titulo="Detalle de vehiculos"/>
            <div className="container">
                <h1>Detalle {match.params.id}</h1>
            </div>
        </Fragment>
     );
}
 
export default DetalleAutomovil;