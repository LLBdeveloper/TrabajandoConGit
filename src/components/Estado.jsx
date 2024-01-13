import {useState} from 'react';

function Estado(){
    const [contador,setContador] = useState(0)

    const incrementarContador = () => {
        setContador(contador + 1);
    };

    return(
        <div>
            <h1>Estado</h1>
            <button onClick={incrementarContador}>{contador}</button>
        </div>
        );
}

export default Estado 



































// import React, { useState } from 'react';

// function MiComponente() {
//   // Declarar una variable de estado llamada "contador" con un valor inicial de 0
//   const [contador, setContador] = useState(0);

//   // Función para incrementar el contador
//   const incrementarContador = () => {
//     setContador(contador + 1);
//   };

//   return (
//     <div>
//       <p>Contador: {contador}</p>
//       <button onClick={incrementarContador}>
//         Incrementar contador
//       </button>
//     </div>
//   );
// }

// export default MiComponente;