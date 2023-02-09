import React, { useState ,useContext } from 'react'
import { FaShoppingBag, FaRegWindowClose } from 'react-icons/fa'
import { CartContext } from '../contexts/CartContext';
import CartProducts from './CartProducts';

const Navbar = () => {
  const cart = useContext(CartContext)
  const [showModal, setShowModal] = useState(false);
  const productsCount = cart.items.reduce((sum,product) => sum + product.quantity, 0)

  return (
    <div className={`relative ${showModal ? 'overflow-hidden' : ''}`}>
      <div className='flex w-full items-center justify-between mx-auto'>
        <div>
          Navbar
        </div>
        <div  onClick={() => setShowModal(true)} className= "flex items-center justify-between cursor-pointer">
       
        <div>
          <FaShoppingBag /> 
          </div>
          <h1 className=''> ({productsCount} items)</h1>
        </div>
      </div>
      {showModal && (
 <div className='fixed right-0 top-0 bg-blue-400 p-4 transform transition-all ease-out duration-500 ' style={{ right: showModal ? 0 : '100%', width: '25%', height: productsCount > 0 ? 'auto' : '10vh', maxHeight: '80vh' }}>



          <button onClick={() => setShowModal(false)}><FaRegWindowClose/> </button>
          {productsCount > 0 
          ?
          <div>
            <p>Items in your cart:</p>
            {cart.items.map ((currentProduct, idx)=>(
             <CartProducts key= {idx} id= {currentProduct.id} quantity= {currentProduct.quantity}/>
            )
            
            )}
            <h1 className=' font-bold '> Total : {cart.getTotalCost().toFixed(2)}</h1>
            <button className=' bg-blue-gradient text-white'> Purchase items</button>
          </div>
          :
          <p>There no items in your cart !</p>
          }
          
        </div>
      )}
    </div>
  );
};

export default Navbar;
