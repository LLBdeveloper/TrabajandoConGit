import { useEffect, useState } from "react"

function BuscadorAPIboton() {

    const[products, setProducts]=useState([])
    const[input, setInput]=useState('')
    useEffect(()=>{
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=celular')
            .then(request => {
                return request.json()
            })
            .then(json => {
                setProducts(json.results) // depende la api el 'results' varia puede ser otra palabra o ninguna
            })        
    },[])


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)

        fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + input)
            .then(response => {
                return response.json()
            })
            .then(json => {
                setProducts(json.results) // depende la api el 'results' varia puede ser otra palabra o ninguna
            })    
    }

    return (
        <>
            <h1>LautaroLIBRE</h1>
            <form onSubmit={handleSubmit} >
                <input value={input} onChange={(e) => setInput(e.target.value)}/>
                <button>Search</button>
            </form>
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

export default BuscadorAPIboton