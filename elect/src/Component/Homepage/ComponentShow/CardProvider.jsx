// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [productscard, setProductscard] = useState([]);
  const [selectproduct, setSelectProduct] = useState([]);
  


  

  const showDetail = (product) => {
  console.log(`Showing details for product with id ${product.id}`);
  console.log(`Showing details for product with id ${product.name}`);
  console.log(`Showing details for product with id ${product.m}`);



  // Adding a detailed description to the product
  const showPro = { ...product, description: "This is a detailed description of the product." };

  // Correctly updating the state with the new product details
  setSelectProduct(showPro);

  // Returning the updated product
  return showPro;
};

  const addProductToCart = (product) => {
  console.log(`Adding product with id ${product.id} to cart`);

  setProductscard((prevCart) => {
    // Check if the product already exists in the cart
    const existingProduct = prevCart.find((item) => item.id === product.id);

    if (existingProduct) {
      // Update count of existing product
      return prevCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // Add new product with count = 1
      return [...prevCart, { ...product, quantity: 1 }];
    }
  });
};


  const remove=(id)=>{
    console.log(`Removing product with id ${id} from cart`);
    setProductscard(productscard.filter(product => product.id !== id));
  }
  const onQtyChange=(id, newQty) => {
    setProductscard(productscard.map(product =>
    product.id === id ? { ...product, quantity: newQty } : product
  ));
            }

  return (
    <CartContext.Provider value={{ productscard,setProductscard,selectproduct, addProductToCart ,remove,onQtyChange,showDetail}}>
      {children}
    </CartContext.Provider>
  );
};
