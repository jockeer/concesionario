import React,{useState} from 'react'

import axios from 'axios'


const NuevoCliente = () => {
    const[nuevoCliente,guardarNuevoCliente]=useState({
        nombren:'',
        cin:'',
        direccionn:'',
        telefonon:''
    })
    const [errorNuevo,setErrorNuevo]=useState(false)

    const {nombren,cin,direccionn,telefonon}=nuevoCliente

    const onChangeN = e => {
        guardarNuevoCliente({
            ...nuevoCliente,
            [e.target.name]:e.target.value
        })
    }
    const onSubmitNew = async e => {
        e.preventDefault();
        if(nombren==='' || cin.trim()==='' || direccionn==='' ||telefonon.trim()===''){
            setErrorNuevo(true);
            return;
        }
        setErrorNuevo(false);

        await axios.post('http://localhost:4000/api/registrarCliente', {
            nombre: nombren,
            ci: cin,
            direccion:direccionn,
            telefono:telefonon
        })
        .then(function (response) {
            if(response.status===200){
                alert('Cliente creado')
                guardarNuevoCliente({
                    nombren:'',
                    cin:'',
                    direccionn:'',
                    telefonon:''
                })
            }else{
                
                alert('Error al insertar')
            }
            // console.log(response.status);
        })

    
        
    }
    return ( 
        <form onSubmit={onSubmitNew}>
            <h3>NUEVO CLIENTE</h3>
            <div className="form-row">
                <div className="form-group col col-11">
                    <label htmlFor="nombren">Nombre</label>
                    <input type="text" name="nombren" id="nombren" className="form-control" onChange={onChangeN}/>
                </div>
                <div className="form-group col col-11">
                    <label htmlFor="cin">Carnet de Identidad</label>
                    <input type="text" name="cin" id="cin" className="form-control" onChange={onChangeN}/>
                </div>
                <div className="form-group col col-11">
                    <label htmlFor="direccionn">Direccion</label>
                    <input type="text" name="direccionn" id="direccionn" className="form-control" onChange={onChangeN}/>
                </div>
                <div className="form-group col col-11">
                    <label htmlFor="telefonon">Telefono</label>
                    <input type="text" name="telefonon" id="telefonon" className="form-control" onChange={onChangeN}/>
                </div>
            </div>
            {errorNuevo 
                ?<p className="alert alert-danger">Todos los campos son obligatorios</p>
                :null
            }
            <button type="submit" className="btn btn-success">Registrar Cliente</button>
        </form>
     );
}
 
export default NuevoCliente;