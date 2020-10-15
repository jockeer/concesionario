import React,{useState} from 'react'
import SideBar from '../layout/SideBar';
import Header from '../layout/Header';
import ReporteVentas from './ReporteVentas';
import ReporteVehiculos from './ReporteVehiculos';
import ReporteUsados from './ReporteUsados';

const Reportes = () => {
    const [reporte,setReporte]=useState('')

    const onChange = e =>{
        setReporte(e.target.value)
    }
    return ( 
        <div className="container-app">
            <SideBar/>
            <div className="container-principal">
                <Header titulo='REPORTES' />
                <div className="container">
                    <h2>Reportes</h2>

                    <form action="">
                        <div className="form-row">
                            <div className="form-group col col-7">
                                <label htmlFor="">Escoja su Reporte</label>
                                <select name="" id="" className="form-control" onChange={onChange}>
                                    <option value="0">Seleccione su opcion...</option>
                                    <option value="ventas">Reporte de Ventas</option>
                                    <option value="vehiculos">Reporte de Vehiculos</option>
                                    <option value="usados">Reporte de Vehiculos Usados</option>
                                </select>
                            </div>
                        </div>
                    </form>

                    {reporte==='ventas'
                        ?<ReporteVentas/>
                        :reporte==='vehiculos'
                        ?<ReporteVehiculos/>
                        :reporte==='usados'
                        ?<ReporteUsados/>
                        :null
                    }
                </div>
            </div>
        </div>
     );
}
 
export default Reportes;