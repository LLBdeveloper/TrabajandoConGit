import { useEffect, useState } from "react"

function BuscadorAPIAutomatico() {

    const[products, setProducts]=useState([])
    const[input, setInput]=useState('')
    useEffect(()=>{
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
            .then(request => {
                return request.json()
            })
            .then(json => {
                setProducts(json.results) // depende la api el 'results' varia puede ser otra palabra o ninguna
            })        
    },[input])




    return (
        <>
            <h1>LautaroLIBRE</h1>
                <input value={input} onChange={(e) => setInput(e.target.value)}/>
            {
                products.map(prod => {
                    return(
                        <div key={prod.id}>
                            <h3>{prod.title}</h3>
                            <img src={prod.thumbnail} alt={prod.title} />
                            <p>{prod.price}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default BuscadorAPIAutomatico
