import { useEffect, useState } from 'react'
import { getProducts } from "./asyncMock"
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {

    const[products, setProducts] = useState([])


    useEffect(()=>{
        getProducts()
            .then(products =>{
                setProducts(products)
            })
    },[])
    
    return ( 
        <>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer