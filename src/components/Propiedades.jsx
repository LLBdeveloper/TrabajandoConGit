// import React from 'react'
import './props.css'
import PropTypes from "prop-types";


function Propiedades(props) {
    return (
        <div className="props">
            <h1>Soy un componente con propiedades</h1>
            <p>{props.porDefecto}</p>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? "verdadero" : "falso"} </li> 
                <li>{props.arreglo.join(",")}</li>
                <li>{props.objeto.nombre + " - " + props.objeto.mail}</li>
                <li>{props.elementoReact}</li>
                <li>{props.arreglo.map(props.funcion)}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    );
}

// podemos establecer unas props por defecto
Propiedades.defaultProps= {
    porDefecto:"Las Props por defecto", 
};


//PROPTYPES podemos requerir cierto valor o ciertas validaciones. 
//( ejemplo quiero que la prop numeber sea un NUMERO y no un string sino da error)
// https://www.npmjs.com/package/prop-types para mas info sobre otros tipos
Propiedades.propTypes={
    numero:PropTypes.number,
};

export default Propiedades