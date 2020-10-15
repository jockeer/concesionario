import React,{Fragment,useState} from 'react'
import ReactHTMLTableToExcel from 'react-html-table-to-excel'

const ReporteVentas = () => {

    const [datos,setDatos]=useState([]);

    const consultar = async () => {
        const API = await fetch(`http://localhost:4000/api/reporteVentas`);
        const respuesta = await API.json();
        setDatos(respuesta)
    }
    


    return ( 
        <Fragment>
            <button onClick={consultar} className="btn btn-primary mb-3">Consultar</button>
            <div>
            <ReactHTMLTableToExcel id="botonExportarExcel" className="btn btn-info mb-3" table="ReporteVentas" filename="repoventas" sheet="pagina 1" buttonText="Exportar a Excel"/>

            </div>
            <table className="table" id="ReporteVentas">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">Codigo</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Tipo de Pago</th>
                    <th scope="col">Matricula</th>
                    <th scope="col">Vendedor</th>
                    <th scope="col">Cliente</th>
                    <th scope="col">Modelo</th>
                    <th scope="col">Marca</th>
                    </tr>
                </thead>
                    <tbody>
                        {datos.map(dato => {
                            return  <tr key={dato.id}>                                        
                                        <td>{dato.id}</td>
                                        <td>{dato.fecha_venta.substr(0,10)}</td>
                                        <td>{dato.precio}</td>
                                        <td>{dato.tipo_pago}</td>
                                        <td>{dato.matricula}</td>
                                        <td>{dato.nomven}</td>
                                        <td>{dato.nomclie}</td>
                                        <td>{dato.modelo}</td>
                                        <td>{dato.marca}</td>
                                    </tr>
                        })}
                        
                        
                        
                    </tbody>
                </table>
        </Fragment>
     );
}
 
export default ReporteVentas;