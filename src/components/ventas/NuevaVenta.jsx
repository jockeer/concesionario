import React,{useState} from 'react'
import axios from 'axios'

import NuevoCliente from '../clientes/NuevoCliente'

const NuevaVenta = () => {

    const [vehiculos,setVehiculos]=useState([])
    const [vehiculoElegido,setVehiculoElegido]=useState({
        
    })
    const [marca,setMarca]=useState('0')

    const [cliente, setCliente]= useState({
        id:'',
        nombre:'',
        ci:'',
        direccion:'',
        telefono:''
    })
    const [ciElegido, setCiElegido]=useState('')

    const [errorCliente, setErrorCliente]=useState(false)

    const [loading, setLoading]=useState(false);
    
    const [total,setTotal]=useState(0);

    const [venta, guardarVenta]=useState({
        fecha_venta:'',
        precioa:'',
        tipo_pago:'',
        matricula:'',
        id_vendedor:'',
        id_cliente:'',
        id_vehiculo:''

    })
    
    const onchangeMarca = async e =>{
        setMarca(e.target.value);
        const API = await fetch(`http://localhost:4000/api/traerVehiculosMarc/${parseInt(e.target.value)}`);
        const respuesta = await API.json();
        setVehiculos(respuesta);
    }
    const onChangeElegido = async e =>{
        if(e.target.value==='0'){
            setVehiculoElegido({
                
            })
            setTotal(0);
            return;

        }
        setVehiculoElegido({
                
        })
        guardarVenta({
            ...venta,
            id_vehiculo:e.target.value
        })
            const elegido = await vehiculos.filter( vehiculo => {
                return vehiculo.id === parseInt(e.target.value)
            })
            setVehiculoElegido(elegido[0]);
            setTotal(elegido[0].precio)
        
    }

   
    const onChangeCarnet = async e =>{
        setCiElegido(e.target.value);
    }
    const onchangeOpcion = async e =>{
        
        if (e.target.checked) {
            setTotal(parseInt(total)+parseInt(e.target.value));        
        }else{
            setTotal(parseInt(total)-parseInt(e.target.value));
        }
        // if (e.target.) {
            
        // }
    }
    const onSubmitVerCliente = async e =>{
        e.preventDefault();
        const API = await fetch(`http://localhost:4000/api/traerCliente/${ciElegido}`);
        const respuesta = await API.json();
        if (respuesta.length === 0) {
            setLoading(true)
            setTimeout(() => {
                setErrorCliente(true);
                setLoading(false)
            }, 1000);
            setCliente(
                {
                    id:'',
                    nombre:'',
                    ci:'',
                    direccion:'',
                    telefono:''
                }
            )
            return;
        }
        setErrorCliente(false)
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 1000);
        guardarVenta({
            ...venta,
            id_cliente:respuesta[0].id
        })
        setCliente(respuesta[0])
    }
    const Comprar = async ()=>{
        var t = new Date();
        let fecha = `${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`
        await axios.post('http://localhost:4000/api/registrarVenta', {
            fecha_venta: fecha,
            precio: parseInt(total),
            tipo_pago:'Al Contado',
            matricula:'LGD-2569',
            id_vendedor:1,
            id_cliente:parseInt(venta.id_cliente),
            id_vehiculo:parseInt(venta.id_vehiculo)
        })
        .then(function (response) {
            if(response.status===200){
                alert('Venta Registrada')
                
            }else{
                
                alert('Error al insertar')
            }
            // console.log(response.status);
        })
    }

    const {nombre,ci,direccion,telefono}=cliente
    const { modelo,cilindrada,estado,precio,foto} = vehiculoElegido;
    

    return ( 
        <div className="container nueva-venta">
            <div className="containerDatos">
                <h3>Datos Cliente</h3>
                <form onSubmit={onSubmitVerCliente}>
                    <div className="form-row">
                        <div className="form-group col col-11">
                            <label htmlFor="">Revisar Cliente</label>
                            <div className="input-group mb-0 ">
                                <input type="text" onChange={onChangeCarnet} className="form-control mb3" placeholder="Digite el Carnet de Identidad..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="submit" id="button-addon2">Revisar</button>
                                </div>
                                {errorCliente                               
                                    ?<div className="">
                                        <p className="alert alert-warning mt-2 mb-2">Debe Registrar el cliente antes de realizar la compra</p>
                                        
                                    </div>
                                    :null
                                }
                            </div>
                        </div>                       
                        <div className="form-group col col-11">
                        {!loading
                            ?<div className="card sombra">
                                <div className="card-body">
                                    <p><b>Nombre:</b> {nombre}</p>
                                    <p><b>ci:</b> {ci}</p>
                                    <p><b>direccion:</b> {direccion}</p>
                                    <p><b>telefono:</b> {telefono}</p>
                                </div>
                            </div>
                            :<div className="d-flex justify-content-center">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        }                           
                        </div>
                    </div>
                </form>
                {errorCliente
                    ?<NuevoCliente/>
                    :null
                }    
                {Object.keys(vehiculoElegido).length === 0
                    ?null
                    :<div className="container-opciones">
                    <h3>Opciones Extra</h3>
                    <div className="form-group">
                        <label className="opcion-elegir" htmlFor="aire">
                            <input type="checkbox" value="50" name="aire" id="aire" onChange={onchangeOpcion}/>     
                            Aire Acondicionado

                        </label>

                    </div>
                    <div className="form-group">
                        <label className="opcion-elegir" htmlFor="metalica">
                            <input type="checkbox" value="20" name="metalica" id="metalica" onChange={onchangeOpcion}/>     
                            Pintura Metalica

                        </label>

                    </div>
                    <h3>Total: <b>{total} $</b></h3>
                    <button onClick={Comprar} className="btn btn-success">Realizar Compra</button>
                </div>
                }  
                
            </div>
            <form action="">
                <h3>Datos Automovil</h3>
                <div className="form-row">
                    <div className="form-group col col-11">
                        <label htmlFor="">Seleccione la marca</label>
                        <select name="" id="formmarca"  className="form-control" onChange={onchangeMarca}>
                            <option value="0">Seleccione una marca</option>
                            <option value="1" >TOYOTA</option>
                            <option value="2" >NISSAN</option>
                            <option value="3" >FORD</option>
                        </select>
                    </div>
                    {marca !== '0'
                        ?<div className="form-group col col-11">
                            <label htmlFor="">Seleccione el vehiculo</label>
                            <select name="" id="formvehiculo"  className="form-control" onChange={onChangeElegido}>
                                <option value="0">Seleccione una marca</option>
                                {vehiculos.map( vehiculo => {
                                    return <option key={vehiculo.id} value={vehiculo.id}>{vehiculo.modelo}</option>
                                })}
                            </select>
                        </div>
                        :null
                    }
                    {Object.keys(vehiculoElegido).length === 0
                        ?null
                        :<div>
                            
                            <div className="form-group col col-11">
                                <label htmlFor="">FOTO</label>                                                
                                <img src={`http://localhost:4000/img/${foto}.jpg`} alt=""/>                                                                                              
                            </div>
                            <div className="card sombra">
                                <div className="card-body">
                                    <p><b>Modelo:</b> {modelo}</p>
                                    <p><b>Cilindrada:</b> {cilindrada}</p>
                                    <p><b>Estado:</b> {estado}</p>
                                    <p><b>Precio:</b> {precio} $.</p>
                                </div>
                            </div>
                        </div>  
                    }
                       
                </div>
            </form>
            
        </div>
     );
}
 
export default NuevaVenta;