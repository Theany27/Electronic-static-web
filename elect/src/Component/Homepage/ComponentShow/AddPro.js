export const addProductToCart = (product,productscard,setProductscard) => {
                      // Function to handle adding product to cart
                      console.log(`Adding product with id ${product.id} to cart`);
                      const newProduct={
                      ...product,
                      count:1,
                }
            setProductscard([...productscard,newProduct])
            // return [...productscard, newProduct];
};