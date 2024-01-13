import {useState} from 'react';

function EstadoCondicional() {

    const [estadoCond,setEstadoCond] = useState(true)
    
    const logIn = () => { setEstadoCond(true)}

    const logOut = () => { setEstadoCond(false)}

        return (

        <div>
            <h1>Estado Condicional</h1>
            <p>{estadoCond?"sesion activa":"Estas sin tu cuenta"}</p>
            <button onClick={logIn}>
                LOGIN
            </button >
            <button onClick={logOut}>
                LOGOUT
            </button>
        </div>
    )
}

export default EstadoCondicional