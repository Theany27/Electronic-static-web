import { useContext, useState } from 'react';
import { CartContext } from './CardProvider';

const PopUpDetail = ({visability,products,onClose}) => {
        const { addProductToCart } = useContext(CartContext);   
        
    return (
      <>
        <div className={`w-full h-full  fixed inset-0 z-50 bg-black/50 cursor-pointer transition-opacity duration-500 ${visability ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => onClose()}>
            <div
                className={`w-[90%] h-[50%] sm:h-[25%] sm:w-[40%] translate-x-100 bg-gray-200 mt-11  z-10 sticky top-20 mx-auto p-4 flex flex-col gap-4  transition-opacity duration-500 rounded-lg shadow-lg overflow-auto
                ${visability ? 'opacity-1' : 'opacity-0'}
                `}
                onClick={(e) => e.stopPropagation()}
            >
                <div className='w-full flex justify-between items-center mb-4'>
                    <p className='text-center text-2xl font-bold'>Product Details</p>
                    <button className=' p-2 rounded-full' onClick={() => onClose()}>
                        X
                    </button>
                </div>
                    <div key={products.id} className='w-full h-full flex justify-between items-center sm:gap-1 sm:h-[300px]'>
                    <img src={products.m} alt={products.name} className='w-[40%] h-[40%] sm:w-[30%] sm:h-[60%] mb-4' />
                    <div className='px-5'>
                    <h3 className='text-lg font-semibold'>{products.name}</h3>
                    <p className='text-gray-600'>Price: ${products.price}</p>
                    <p className='text-gray-600'>Description: {products.description}</p>
                    <button onClick={() => {addProductToCart(products) ;onClose()}} className='bg-blue-500 text-white p-2 rounded-full mt-4 hover:bg-blue-600 duration-200'> 
                        Add to Cart
                    </button>
                    </div>
                </div>
            </div>
        </div>
      </>  
    );
};
export default PopUpDetail;