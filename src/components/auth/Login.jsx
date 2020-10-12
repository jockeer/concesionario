import React,{useState} from 'react'

import Error from '../layout/Error'

const Login = (props) => {

    const [ error, guardarError ] = useState(false);
    const [ usuario, guardarUsuario ] = useState({
        user:'',
        pass:''
    })

    const {user,pass}=usuario

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]:e.target.value
        })
    } 

    const onSubmit = e => {
        e.preventDefault();

        if ( user.trim() === '' || pass.trim() === '' ) {
            guardarError(true);
            return;
        }
        guardarError(false);

        props.history.push('/home');
    }

    return ( 
        <div className="container-login">
            <div className="card sombra">
                <div className="card-header">
                    Login
                </div>
                <div className="card-body">
                    <form onSubmit={onSubmit} >
                        <label htmlFor="">Usuario: </label>
                        <div className="input-group input-group-md mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-sm"><i className="material-icons">person</i></span>
                            </div>
                            <input type="text" className="form-control" name="user" value={user} onChange={onChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                        </div>
                        <label htmlFor="">Contraseña: </label>
                        <div className="input-group input-group-md mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-sm">  <i className="material-icons">https</i></span>
                            </div>
                            <input type="password" className="form-control" name="pass" value={pass} onChange={onChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                        </div>
                        {error
                            ?<Error mensaje="datos erroneos" clase="alert alert-danger"/>
                            :null
                        }
                        <div className="container-button">
                            <button type="submit" className="btn btn-primary">INGRESAR</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Login;