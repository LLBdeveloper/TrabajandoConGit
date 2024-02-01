import './App.css'
import BuscadorAPIAutomatico from './components/BuscadorAPIAutomatico'
// import BuscadorAPIboton from './components/BuscadorAPIboton'
// import Mercadolibre from './components/Mercadolibre'
// import ItemListContainer from './components/ItemListContainer'
// import Promesas from './components/Promesas'
// import Componente from "./components/Componente"
// import Propiedades from './components/Propiedades'
// import ComponenteCP from './components/ComponenteCP'
// import Estado from './components/Estado'
// import EstadoCondicional from './components/EstadoCondicional'
// import ContadorHooks from './components/ContadorHooks'
// import ScrollHooks from './components/ScrollHooks'
// import RelojHooks from './components/RelojHooks'
// import AjaxHooks from './components/AjaxHooks'
// import Intentando from './components/Intentando'
// import Bip from './components/Bip'

function App() {

  return (
    <>

      {/* <Componente />
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
      
      <BuscadorAPIboton/>
      <Mercadolibre/>
      <ItemListContainer greeting={"todos nuestros productos"}/>
      <Intentando /> 
    <Promesas />*/}
  <BuscadorAPIAutomatico/>


    </>
  )
}

export default App
