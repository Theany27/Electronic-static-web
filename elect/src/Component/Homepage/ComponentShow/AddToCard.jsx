import { useState } from 'react';
import { BsTrash3 } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Addtocard = ({visability,products,onProductRemove,onQtyChange,onClose}) => {
    
    return (
        <div className={`w-full h-full fixed inset-0 bg-black/70 z-50 cursor-pointer transition-opacity duration-500  ${visability ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => onClose()}>
            <div
                className={`w-[90%] h-full bg-white absolute right-0 p-4 flex flex-col gap-4 transition-transform duration-500 rounded-lg shadow-lg overflow-auto sm:w-[30%] ${visability ? '-translate-x-0' : 'translate-x-36'}`}
                // style={{ transform: 'translate(-50%, -50%)' }}
                onClick={(e) => e.stopPropagation()}
                >
                <div className='w-full flex justify-between items-center mb-4 '>
                    <p className='text-center text-2xl font-bold'>Shopping Card</p>
                    <button className=' p-2 rounded-full' onClick={() => onClose()}>
                        X
                    </button>
                </div>
                <div>
                    {products.length === 0 && (
                        <span className='text-center block'>
                            Currently, Your Product is Empty!
                        </span>
                    )}
                    
                    {products.map((product) => (
                            <div key={product.id} className='w-[100%] h-[50%] flex justify-between items-center p-4 border-b '>
                                <div className='w-full h-full flex items-center'>
                                    <img src={product.m} alt={product.name} className='w-16 h-16 mr-4' />
                                    <div>
                                        <h3 className='text-lg font-semibold'>{product.name}</h3>
                                        <p className='text-gray-600'>Price: ${product.price*product.quantity}</p>
                                        <p className='text-gray-600'>Quantity: {product.quantity}</p>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <button onClick={() => onQtyChange(product.id, product.quantity - 1)} disabled={product.quantity <= 1} className='bg-gray-200 p-1 rounded-full w-10 cursor-pointer hover:bg-black text-white duration-200 '>-</button>
                                    <span className='  sm:mx-4 text-xl text-red-800'>{product.quantity}</span>
                                    <button onClick={() => onQtyChange(product.id, product.quantity + 1)} className='bg-gray-200 p-1 rounded-full w-10 cursor-pointer hover:bg-black text-white duration-200'>+</button>
                                    <button onClick={() => onProductRemove(product.id)} className='bg-slate-200 text-black p-1 ml-2 rounded-full hover:text-red-700 duration-200 '><BsTrash3 size={22} /></button>
                                </div>
                            </div>
                        ))}
                        {products.length > 0 && (
                            <button className='bg-black text-white p-2 rounded-full mt-4 ' onClick={() => onClose()}>
                                <Link to="/checkout" className='text-white'>Proceed to Checkout</Link>
                            </button>
                        )}
                    
                </div>
            </div>
    {/* (`Total Price: $${products.reduce((total, product) => total + product.price * product.quantity, 0)}`) */}

        </div>
    );
};
export default Addtocard;