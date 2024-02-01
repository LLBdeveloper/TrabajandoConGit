// import React from 'react'

import Item from "./Item"

function ItemList({products}) {

    return (
        <div style={{display: 'flex', margin: '2rem', }}>
            {products.map(product => <Item key={product.id} {...product}/>)}  
        </div>
    )
}

export default ItemList 