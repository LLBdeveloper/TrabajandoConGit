import {useState, useEffect} from 'react';

function ScrollHooks () {

    const [scrollY, setScrollY]= useState(0)

    useEffect(()=>{
        console.log("fase de actualizacion")
        const detectarScroll=()=> setScrollY(window.pageYOffset);
        window.addEventListener("scroll",detectarScroll);
        }
    )

    return(
        <>
        <h2>Hooks - useEffect y el ciclo de vida</h2>
        <p>Scroll Y del navegador{scrollY}px</p>
        </>
        )
}

export default ScrollHooks