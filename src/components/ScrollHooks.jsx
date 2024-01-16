import {useState, useEffect} from 'react';

function ScrollHooks () {

    const [scrollY, setScrollY]= useState(0)

    useEffect(()=>{
        console.log("moviendo el scroll")
        const detectarScroll=()=> setScrollY(window.pageYOffset);
        window.addEventListener("scroll",detectarScroll);
    },[scrollY]);

    useEffect(()=>{
        console.log("fase de montaje");
    },[]);//solo una vez con []

    useEffect(()=>{
        console.log("fase de actualizacion");
    });// mejor usar el primero, es medio como mala practica usar este salvo casos especiales

    useEffect(()=>{
        const detectarScroll=()=> setScrollY(window.pageYOffset);
        window.addEventListener("scroll",detectarScroll);

        return()=>{ 
        console.log("fase de desmontaje"); 
        window.removeEventListener("scroll",detectarScroll);

    }
    },[scrollY]);//desuscribirte de servicios, desconectar de API,  limpiar intervalo de tiempo o manejadores de componentes que dejaron de existir para no consumir memoria de mas

    return(
        <>
        <h2>Hooks - useEffect y el ciclo de vida</h2>
        <p>Scroll Y del navegador{scrollY}px</p>
        </>
        )
}

export default ScrollHooks