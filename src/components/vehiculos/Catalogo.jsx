import React, {Fragment,useState,useEffect} from 'react'
import Automovil from './Automovil'

const Catalogo = () => {

    const [ marcaSelect, guardarMarcaSelect] = useState(0);

    const [ catalogo, setCatalogo] = useState([
        // {id:1, marca:1,modelo:'Hilux', cilindrada:'23123', precio:25000.00}
    ])

    useEffect(() => {
        const llenarCatalogo = async () => {
            const API= await fetch(`http://localhost:4000/api/traerVehiculos`);
            const respuesta= await API.json();
            setCatalogo(respuesta);

        }
        llenarCatalogo();
    }, [marcaSelect])

    const onChange = e =>{
        guardarMarcaSelect(parseInt(e.target.value))

    }
    const onSubmit = e =>{
        e.preventDefault();

    }
    return ( 
        <Fragment>
            <h3>Eliga una Marca</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <select className="form-control" name="" onChange={onChange} id="">
                        <option defaultValue="0">Seleccione una opcion...</option>
                        <option value="1">TOYOTA</option>
                        <option value="2">NISSAN</option>
                        <option value="3">FORD</option>
                        <option value="4">BMW</option>
                    </select>
                    <button type="submit" className="btn btn-success">Buscar Automoviles</button>
                </div>
            </form>
            <div className="container-catalogo">
                {catalogo.map(automovil => {
                    return <Automovil key={automovil.id} automovil={automovil} />
                })}
            </div>
        </Fragment>
     );
}
 
export default Catalogo;