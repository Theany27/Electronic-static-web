import { useParams } from 'react-router-dom';
import "aos/dist/aos.css";

const CardProduct = ({images,duration,price,name}) => {
    
    return (
        <div className=" w-[180px] h-[250px] m-auto cursor-pointer shadow-lg duration-300 rounded-2xl overflow-hidden relative sm:h-[450px] sm:w-[350px]"data-aos="fade-up" data-aos-delay={duration} >  
            <div className='h-[75%] w-full '>
            <img src={images} alt="Product"  className='w-full h-full pro_card'/>
            </div>  
            <div>
                <p className=' sm:text-left px-3 sm:text-2xl  mt-2'>Product: <b>{name}</b></p>
                <p className='sm:text-left px-3 sm:text-lg font-semibold mt-1'>Price: ${price}</p>
            </div>
        </div>
        
    );
};
export default CardProduct;