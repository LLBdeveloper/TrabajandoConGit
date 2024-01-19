

const products = [
    {
        id:'1',
        name:'tabla',
        price:'15000',
        category:'decks',
        img:'./gato.png',
        stock:'18',
        description:'Tabla balanceboard surf'
    },
    { id:'2', name:'tabla snow', price:'13000', category:'decks', img:'http://placekitten.com/200/300', stock:'18', description:'Tabla balanceboard snow'},
    { id:'3', name:'tabla long', price:'17000', category:'decks', img:'http://placekitten.com/200/300', stock:'12', description:'Tabla balanceboard long'}
]

export const getProducts = () => {
    return new Promise( (resolve) => {
        setTimeout( () => {
            resolve(products)
        }, 2000)
    })
}


