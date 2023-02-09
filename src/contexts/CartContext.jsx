import React, { createContext, useState } from "react";
import { productsArray, getProductData } from "../productsStore";

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => { },
    addOneToCart: () => { },
    removeOneFromCart: () => { },
    deleteFromCart: () => { },
    getTotalCost: ()=> {}
});

 const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);
    const getProductQuantity = (id) => {
        const quantity = cartProducts.find(
            (product) => product.id === id
        )?.quantity;
        if (quantity === undefined) {
            return 0;
        }
        return quantity;
    };
    const addOneToCart = (id) => {
        const quantity = getProductQuantity(id);
        if (quantity === 0) {
            // no item in cart
            setCartProducts([...cartProducts, { id: id, quantity: 1 }]);
        } else {
            // product is in cart . used gpt
            const updatedCartProducts = cartProducts.map(product => {
                if (product.id === id) {
                    return { ...product, quantity: product.quantity + 1 };
                }
                return product;
            });
            setCartProducts(updatedCartProducts);
        }
    };
    const removeOneFromCart = (id) => {
        const quantity = getProductQuantity(id)
        if (quantity == 1) {
            deleteFromCart(id)
        } else {
            //used gpt
            const updatedCartProducts = cartProducts.map(product => {
                if (product.id === id) {
                    return { ...product, quantity: product.quantity - 1 };
                }
                return product;
            });
            setCartProducts(updatedCartProducts);
        }
    }
    const deleteFromCart = (id) => {
        //used gpt
        setCartProducts(cartProducts.filter((currentproduct) => currentproduct.id !== id))
    }
    const getTotalCost = ()=> {
let totalCost = 0;
cartProducts.map((cartItem) => {
const productData = getProductData(cartItem.id)
totalCost += (productData.price * cartItem. quantity)
})
return totalCost
    }
   
      
    const contexValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost,
        
    };

    return (
        <CartContext.Provider value={contexValue}>{children}</CartContext.Provider>
    );
};
export default CartProvider;