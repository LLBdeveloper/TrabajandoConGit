import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Componente from "./components/Componente"
import Propiedades from './components/Propiedades'
import ComponenteCP from './components/ComponenteCP'
import Estado from './components/Estado'
import EstadoCondicional from './components/EstadoCondicional'
import ContadorHooks from './components/ContadorHooks'
import ScrollHooks from './components/ScrollHooks'
import RelojHooks from './components/RelojHooks'
import AjaxHooks from './components/AjaxHooks'
import Intentando from './components/Intentando'
import Bip from './components/Bip'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Componente />
      <Propiedades 
        cadena="Esto es una cadena de texto"
        numero={8}
        booleano={true}
        arreglo={[1,2,3]}
        objeto={{nombre:"lautaro",mail:"berte@gmail.com"}}
        elementoReact={<i>Estos es un elemento react. (ejemplo etiquetaas tipo bold o italic) </i>}
        funcion={(num)=> num*num}
        componenteReact={<ComponenteCP msg="Soy un componenteReact expresado desde una props"/>}
      />
      <Estado />
      <EstadoCondicional />
      <ContadorHooks />
      <ScrollHooks />
      <RelojHooks />
      <AjaxHooks />
      <Bip />

    
    <Intentando />

      <br/>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
