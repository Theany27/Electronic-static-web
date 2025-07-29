import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "aos/dist/aos.css";

import Azus from "../Categories/Computer/MsiPage";
import Mac from "../../Homepage/Categories/Computer/Mac";
import Msi from "../../Homepage/Categories/Computer/Msi";
import Dell from "../../Homepage/Categories/Computer/Dell";


const images = [
  "https://i5.walmartimages.com/asr/728707b6-9b10-45f4-b278-e76ca3b09485_1.a4d2288bbd29924c28c82f74106365be.jpeg",
  "https://dlcdnwebimgs.asus.com/gain/6accccd9-da0c-46ec-8ce9-061c7bfea45c/",
  "https://laptopmedia.com/wp-content/uploads/2017/06/macbook_pro_13_a_1143_0_0.jpg",
  
];
const Pro_DemoCom = (props) => {
    const [index, setIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prev) => (prev + 1) % images.length);
        }, 3000); // Change every 4 seconds
    
        return () => clearInterval(interval);
      }, []);
    return (
        <div className='w-full h-[100vh] m-auto mt-10 flex justify-between border border-gray-200 bg-slate-50 rounded-lg shadow-lg'>
           


            {/* for right poster */}
            <div className='w-full h-[800px] grid grid-cols-2  sm:w-[70%] sm:h-full sm:grid-cols-3 gap-1 rounded-lg shadow-lg sm:bg-white'>
            {/* <Azus duration={300}/>
            <Mac duration={500}/> */}
            <Msi duration={700}/>
            <Msi duration={300}/>

            <Msi duration={500}/>
            <Msi duration={700}/>
            {/* <Dell duration={900}/> */}


            {/* <Azus duration={300}/>
            <Mac duration={500}/>
            <Msi duration={700}/>
            <Dell duration={900}/> */}
            </div>
        </div>
    );
};
export default Pro_DemoCom;