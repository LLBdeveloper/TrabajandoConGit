//ciclo de vida en hooks
import { useEffect, useState } from 'react'

function Reloj({hora}){
    return <h3>{hora}</h3>
}

function RelojHooks() {
    const[hora, setHora]=useState(new Date().toLocaleTimeString());
    const[visible,setVisible]=useState(false);

    useEffect(()=>{
        let temporizador;
        if(visible){
            temporizador =  setInterval(()=>{
            setHora(new Date().toLocaleTimeString());
            }, 1000);
        }else{
            clearInterval(temporizador);
        return ()=>{
            console.log("fase desmontaje");
            }
        }
    },[visible]);

    return (
        <>
            <h2>reloj con hooks</h2>
            {visible&&<Reloj hora={hora}/>}
            <button onClick={()=>setVisible(true)}>iniciar </button>
            <button onClick={()=>setVisible(false)}>detener </button>
        </>
    )
}

export default RelojHooks