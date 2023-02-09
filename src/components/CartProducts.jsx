import React from 'react'
import {useContext} from 'react'
import { CartContext } from '../contexts/CartContext'
import { getProductData } from '../productsStore'


const CartProducts = (props) => {
    const cart = useContext(CartContext)
    const id = props.id
    const quantity = props.quantity
    const productData = getProductData(id)

  return (
    <div>
        <h1> {productData.name}</h1>
        <p> {quantity} total</p>
        <p>Ksh {(quantity * productData.price)}</p>
        <button onClick={()=>cart.deleteFromCart(id) } className=''> Remove</button>
        <hr></hr>
    </div>
  )
}

export default CartProducts