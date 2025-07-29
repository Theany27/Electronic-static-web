import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "aos/dist/aos.css";

const images = [
  "https://i5.walmartimages.com/asr/728707b6-9b10-45f4-b278-e76ca3b09485_1.a4d2288bbd29924c28c82f74106365be.jpeg",
  "https://dlcdnwebimgs.asus.com/gain/6accccd9-da0c-46ec-8ce9-061c7bfea45c/",
  "https://laptopmedia.com/wp-content/uploads/2017/06/macbook_pro_13_a_1143_0_0.jpg",
  
];

const variants = {
  initial: { y: 300, opacity: 0, position: "absolute" },
  animate: { y: 0, opacity: 1, position: "absolute" },
  exit: { y: 0, opacity: 0, position: "absolute" },
};
function Azus({duration}) {
  const [index, setIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // change image every 3 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className=" w-[180px] h-[250px] m-auto cursor-pointer shadow-lg duration-300 rounded-2xl overflow-hidden relative sm:h-[450px] sm:w-[350px]"data-aos="fade-up" data-aos-delay={duration}>
      <AnimatePresence>
        <motion.img
          key={images[index]}
          src={images[index]}
          alt="Phone"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white font-bold text-center py-2">
        Azus
      </div>
    </div>
  );
}

export default Azus;
