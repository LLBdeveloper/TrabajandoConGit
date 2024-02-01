// import React from 'react'

const Item = ({name, img, price}) => {
    return (
        <div style={{ margin: "1rem", border: "1rem solid black"}}> 
            <h3>{name}</h3>
            <img src={img} alt={name} style={{ maxHeight: "300px" }} />
            <p>precio: ${price}</p>
        </div>
        
    )
}

export default Item