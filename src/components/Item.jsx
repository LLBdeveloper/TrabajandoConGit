// import React from 'react'

const Item = ({name, img, price}) => {
    return (
        <div > 
            <h3>{name}</h3>
            <img src={img} alt={name}/>
            <p>precio: ${price}</p>
        </div>
        
    )
}

export default Item