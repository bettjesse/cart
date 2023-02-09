const productsArray= [
    {
        id:"1",
        name:"coffee",
        price:2.99,
        image:"1.jpg"
    },
    {
        id:"2",
        name:"sunglass",
        price:8.99,
        image:"2.jpg"
    },
    {
        id:"3",
        name:"chocholate cake",
        price:2000,
        image:"3.jpg"
    },
    
    {
        id:"4",
        name:"chocholate cake",
        price:2000,
        image:"3.jpg"
    },
    
    {
        id:"5",
        name:"chocholate cake",
        price:2000,
        image:"3.jpg"
    },
    
    {
        id:"6",
        name:"chocholate cake",
        price:2000,
        image:"3.jpg"
    },
    
    {
        id:"7",
        name:"chocholate cake",
        price:2000,
        image:"3.jpg"
    },
    
    {
        id:"8",
        name:"chocholate cake",
        price:2000,
        image:"3.jpg"
    },
    
    {
        id:"9",
        name:"chocholate cake",
        price:2000,
        image:"3.jpg"
    },
    
    {
        id:"10",
        name:"chocholate cake",
        price:2000,
        image:"3.jpg"
    },
    
    {
        id:"11",
        name:"chocholate cake",
        price:2000,
        image:"3.jpg"
    },
    
    {
        id:"12",
        name:"chocholate cake",
        price:2000,
        image:"3.jpg"
    },
    
    {
        id:"13",
        name:"chocholate cake",
        price:2000,
        image:"3.jpg"
    },
    
    {
        id:"14",
        name:"chocholate cake",
        price:2000,
        image:"3.jpg"
    },
    
    {
        id:"15",
        name:"chocholate cake",
        price:2000,
        image:"3.jpg"
    },
    
    {
        id:"16",
        name:"chocholate cake",
        price:2000,
        image:"3.jpg"
    },
    
    {
        id:"17",
        name:"chocholate cake",
        price:2000,
        image:"3.jpg"
    },
    
    {
        id:"18",
        name:"chocholate cake",
        price:2000,
        image:"3.jpg"
    },
    
    {
        id:"19",
        name:"chocholate cake",
        price:2000,
        image:"3.jpg"
    },
    
    {
        id:"20",
        name:"chocholate cake",
        price:2000,
        image:"3.jpg"
    },
    
    {
        id:"21",
        name:"chocholate cake",
        price:2000,
        image:"3.jpg"
    },
    
    {
        id:"22",
        name:"chocholate cake",
        price:2000,
        image:"3.jpg"
    },
    
    {
        id:"23",
        name:"chocholate cake",
        price:2000,
        image:"3.jpg"
    },
    
   
    
]
const getProductData= (id)=> {
    let productData= productsArray.find( product=> product.id === id)

    if (productData== undefined){
        console.log("product does not exist")
        return undefined
    }
    return productData
}
export { productsArray,getProductData }