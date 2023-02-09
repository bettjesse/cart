import React from 'react'
import { Link } from 'react-router-dom';
import {FaPlus,FaEye } from "react-icons/fa"
import { CartContext } from '../contexts/CartContext';
import { useContext } from 'react';



const Product = (props) => {
  const product= props.product
  const cart = useContext(CartContext)
  const productQuantity= cart.getProductQuantity(product.id)
  console.log(cart.items)
  
  

  
  return (
    <div>
      <div className="border border-[#e98787] h-[300px] mb-4 relative overflow-hidden group transition ">
        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-[200px] mx-auto flex justify-center items-center'> 
          <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={`../../images/${product.image}`} alt="hello" />

            </div>
        </div>
       
      </div>
     
      <div>
        <Link to = {`../../images/${product.id}`}>
        <h2 className=' font-semibold mb-1'>
          {product.name}
          
        </h2>
        </Link>
        <div className='font-semibold'>ksh{product.price}</div>
        {productQuantity > 0 ?
        <div>
          <div className='flex justify-between '>
            <div className='flex justify-between items-center w-full'>
            In cart:{productQuantity}
            <div className='pr-5 '>
              <button onClick={()=> cart.addOneToCart(product.id)} className='bg-red-500 mr-[10px] h-[40px] w-[40px]'>+</button>
              <button  onClick={()=> cart.removeOneFromCart(product.id)} className='bg-red-500 h-[40px] w-[40px]'>-</button>
            </div>
            </div>
           
            </div>
            <button onClick={() => cart.deleteFromCart(product.id)} className='bg-blue-500 py-2 px-4 w-full my-2 rounded'>Remove from cart</button>

        </div> :
        <button onClick={()=> cart.addOneToCart(product.id)}> add to cart</button>
      }
      </div>
    </div>
  )
}

export default Product