// import React from 'react'

import { useEffect, useState } from "react"

function Mercadolibre() {

    const[products, setProducts]=useState([])

    useEffect(()=>{
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=celular')
            .then(request => {
                return request.json()
            })
            .then(json => {
                setProducts(json.results) // depende la api el 'results' varia puede ser otra palabra o ninguna
            })        
    },[])


console.log(products)
    return (
        <div>
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
        </div>
    )
}

export default Mercadolibre