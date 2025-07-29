import { useState } from 'react';
import { Link } from 'react-router-dom';

const HPageLay = (props) => {
    
    return (
        <div className='w-full h-auto m-auto mt-10 bg-white rounded-md' >
                <div className='w-[100%] m-auto h-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-5 p-5 sm:w-[80%]'>
                     <div className='w-[80%] h-[200px] m-auto rounded-md shadow-md flex flex-col items-center justify-center cursor-pointer sm:h-[400px]' >
                        <div className="relative h-full w-full" data-aos="fade-up" data-aos-delay="200">
                        <img src="https://laptopmedia.com/wp-content/uploads/2023/03/3-7-e1678204949389.jpg" alt="Product" className="w-full h-full object-cover rounded-md card"/>
                        <button className="absolute bottom-3 left-5 bg-gray-300 text-black px-4 py-2 rounded-full hover:bg-black hover:text-white duration-200 sm:left-60 sm:px-4 sm:py-3">
                        <Link to="/azus" className='text-sm sm:text-md'>Go To Azus</Link>
                        </button>
                        </div>
                     </div>
                     <div className='w-[80%] h-[200px] m-auto rounded-md shadow-md flex flex-col items-center justify-center cursor-pointer sm:h-[400px]'>
                        <div className="relative h-full w-full" data-aos="fade-up" data-aos-delay="400">
                        <img src="https://laptopmedia.com/wp-content/uploads/2023/03/3-7-e1678204949389.jpg" alt="Product" className="w-full h-full object-cover rounded-md card"/>
                        <button className="absolute bottom-3 left-5 bg-gray-300 text-black px-4 py-2 rounded-full hover:bg-black hover:text-white duration-200 sm:left-60 sm:px-4 sm:py-3">
                        <Link to="/msi" className='text-sm sm:text-md'>Go To Msi</Link>
                        </button>
                        </div>
                     </div>
                     {/* <div className='w-[80%] h-[300px] m-auto rounded-md shadow-md flex flex-col items-center justify-center cursor-pointer'>
                        <div className="relative h-full w-full" data-aos="fade-up" data-aos-delay="300">
                        <img src="https://laptopmedia.com/wp-content/uploads/2023/03/3-7-e1678204949389.jpg" alt="Product" className="w-full h-full object-cover rounded-md pro_card"/>
                        <button className="absolute bottom-3 left-36 bg-gray-300 text-black px-4 py-3 rounded-full hover:bg-black hover:text-white duration-200">
                            Go To Azus
                        </button>
                        </div>
                     </div> */}
                     
                </div>
        </div>
    );
};
export default HPageLay;