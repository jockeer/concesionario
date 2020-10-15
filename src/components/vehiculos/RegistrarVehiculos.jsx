import React from 'react'
import { useState } from 'react'

const RegistrarVehiculos = () => {

    const[error,setError]=useState(false)

    const [nuevoVehiculo, setNuevoVehiculo] = useState({
        modelo:'',
        marca:'',
        cilindrada:'',
        precio:0,       

    })

    const onChange = e => {
        setNuevoVehiculo({
            ...nuevoVehiculo,
            [e.target.name]:e.target.value
        })
    }
    const {modelo,marca,cilindrada,precio}=nuevoVehiculo;


    const onChangeImage = e => {
        const file = e.target.files[0];
        const image = URL.createObjectURL(file);
        document.getElementById('imgss').src=image;
    }

    const enviarImagen = async (formdata)=>{
        console.log(formdata)

        const url = `http://localhost:4000/api/a`

        await fetch(url,{
            method:'POST',
            body:formdata
           
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => alert('insertado correctamente'));
        document.getElementById('imgss').src=''
    }

    const onSubmit = async e => {
        e.preventDefault();

        if (modelo.trim()==='' || marca.trim()==='' || cilindrada.trim()==='' || precio <= 0) {
            setError(true);
            return;
        }
        setError(false);

        const formdata = new FormData(e.currentTarget)

        var t = new Date();
        let fecha = `${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`
        let hora = `${t.getHours()}.${t.getMinutes()}.${t.getSeconds()}`

        const url = `http://localhost:4000/api/registrarVehiculo`

        const data = {};
        data.modelo = modelo
        data.id_marca = parseInt(marca); 
        data.cilindrada = cilindrada
        data.precio = parseInt(precio)
        data.foto = `${modelo} ${fecha} ${hora}`
        
        let JSO = JSON.stringify(data)
        await fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSO, // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response =>enviarImagen(formdata));

        setNuevoVehiculo({
            modelo:'',
            marca:'',
            cilindrada:'',
            precio:0
        })

    }

    return ( 
        <div className="container">
            <div className="container-nuevo-vehiculo">
                <form onSubmit={onSubmit} encType="multipart/form-data">
                    <h3>Registro de Vehiculos</h3>
                    <div className="form-row">
                        <div className="form-group col-11">
                            <label htmlFor="">Modelo</label>
                            <input type="text" name="modelo" id="" value={modelo} className="form-control" onChange={onChange}/>
                        </div>

                    </div>
                    <div className="form-row">
                        <div className="form-group col-11">
                            <label htmlFor="">Marca</label>
                            <select name="marca" id="" className="form-control" onChange={onChange}>
                                <option defaultValue="0">Seleccione una marca</option>
                                <option value="1">TOYOTA</option>
                                <option value="2">NISSAN</option>
                                <option value="3">FORD</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-11">
                            <label htmlFor="">Cilindrada</label>
                            <input type="text" name="cilindrada" id="" value={cilindrada} className="form-control" onChange={onChange}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-11">
                            <label htmlFor="">Precio</label>
                            <input type="number" name="precio" id="" value={precio} className="form-control" onChange={onChange}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-11">
                            <input type="file" name="imagen" id="" className="" onChange={onChangeImage}/>
                        </div>
                    </div>
                    {error
                    ?<p className="alert alert-danger">Todos los campos deber llenarse correctamente</p>
                    
                    :null}
                    <button type="submit" className="btn btn-primary">Registrar</button>
                </form>
                <div className="container-imagen-vehiculo">
                    <h3>foto del Vehiculo</h3>

                    <img id="imgss" src="" alt=""/>
                </div>
            </div>
        </div>
     );
}
 
export default RegistrarVehiculos;