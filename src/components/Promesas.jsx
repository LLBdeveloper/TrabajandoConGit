// import React from 'react'

function Promesas() {
    
    const irAlRestourant = () =>{
        return 'llegue al restaurant'
    }
    
    const pedirComida = () =>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{ 
                if(true){
                    resolve('recibo comida')
                } else{
                    reject('no hay comida')
                }
            }, 2000)
        })
    }
    
    const comer = () =>{
        return 'termino de comer'
    }
    


    console.log(irAlRestourant())
    
    pedirComida()
        .then(data => {
            console.log(data)
            console.log(comer())
        })
        .catch(error => {
            console.log(error)
        })
        .finally(()=>{
            console.log('me voy')
        })




    return (
        <div>
            Promesas
        </div>
    )
}

export default Promesas