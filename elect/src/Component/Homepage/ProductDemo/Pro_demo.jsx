import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "aos/dist/aos.css";
import CardProduct from "../../Item/Card";
import Msi from "../Categories/Computer/Msi";
import { Link } from "react-router-dom";
import Azus from "../Categories/Computer/Azus";
import IphonePage from "../Categories/Phone/IphonePage";
import IPhone from "../Categories/Computer/Iphone";
import Saumsung from "../Categories/Computer/Saumsung";
import Ipad from "../Categories/Computer/Ipad";
import Huawei from "../Categories/Computer/Huawei";


const images = [
  "https://www.apple.com/v/iphone-16/f/images/overview/photographic-styles/megapixels__clulnpeenivm_large.png",
  "https://www.apple.com/v/iphone-16e/c/images/overview/contrast/iphone_16__dhi77ut7vgcy_xlarge.jpg",
  "https://www.apple.com/v/iphone-16e/c/images/overview/contrast/iphone_16e__dxha4illuf2a_xlarge.jpg",
  
];
const Pro_Demo = (props) => {
    const [index, setIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prev) => (prev + 1) % images.length);
        }, 3000); // Change every 4 seconds
    
        return () => clearInterval(interval);
      }, []);
      const phone=[
        {id:1,images:"https://angkormeas.com/wp-content/uploads/2024/09/HK_16-Pro-Max-300x300.jpg?v=1730779212",duration:300,price:1000,name:"iphone"},
        {id:2,images:"https://media.ldlc.com/ld/products/00/05/88/62/LD0005886202_1.jpg",duration:500,price:1000,name:"samsung"},
        {id:3,images:"https://media.ldlc.com/ld/products/00/05/81/99/LD0005819915_1.jpg",duration:700,price:1000,name:"nokia"},
        {id:4,images:"https://images.anandtech.com/doci/16167/GEO-iPhone12ProMax-iPhone12Pro-pacific-blue-2up.png",duration:300,price:1000,name:"google"},
        {id:5,images:"https://tse3.mm.bing.net/th?id=OIP.0vlZL_jOiu2XEdcfvPQ2ZQHaJo&pid=Api&P=0&h=220",duration:500,price:1000,name:"oneplus"},
        {id:6,images:"https://tse4.mm.bing.net/th?id=OIP.VhfUeTqSJREETG36IzVsDgHaFA&pid=Api&P=0&h=220",duration:700,price:1000,name:"sony"},
        

    ]
    return (
        <div className="min-h-screen"> 
        <div className=' w-full h-[110vh] sm:h-[100vh] m-auto mt-0 sm:mt-10 flex flex-wrap gap-x-5 gap-y-8 border border-gray-200 bg-slate-50 rounded-lg shadow-lg '>
            {/* for left poster */}
            <div className='w-[25%] h-full bg-gray-200 hidden sm:block'>
                <div className='w-[75%] h-[50%] bg-gray-50 m-auto rounded-lg shadow-lg sticky top-20 mx-auto overflow-hidden cursor-pointer 'data-aos="fade-right" data-aos-delay="200">
                    <AnimatePresence>
                            <motion.img
                              key={images[index]}
                              src={images[index]}
                              alt="Poster"
                              initial={{ opacity: 0, scale: 1.05 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              transition={{ duration: 1 }}
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                          </AnimatePresence>
                </div>
            </div>


            {/* for right poster */}
            <div className='w-full h-[800px] grid grid-cols-2  sm:w-[70%] sm:h-full sm:grid-cols-3 gap-1 rounded-lg shadow-lg sm:bg-white'>
              {/* {phone.map((item)=>(
                <CardProduct images={item.images} duration={item.duration} price={item.price} name={item.name}/>
              ))} */}
              <Link to='/azus'><Azus duration={300}/></Link>
              <Link to='/msi'><Msi duration={500}/></Link>
              <Link to='/iphone'><IPhone duration={300}/></Link>
              <Link to='/samsung'><Saumsung duration={500}/></Link>
              <Link to='/huawei'><Huawei duration={300}/></Link>
              <Link to='/apple'><Ipad duration={500}/></Link>
            </div>
        </div>  
        </div>
    );
};
export default Pro_Demo;