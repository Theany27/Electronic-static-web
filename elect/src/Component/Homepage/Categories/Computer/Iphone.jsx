import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "aos/dist/aos.css";

const images = [
  "https://static.turbosquid.com/Preview/2019/11/05__18_45_39/iPhone11PROMAX.1.jpgA15C5282-4924-467A-A280-B21F518CF588Default.jpg",
  "https://cdn.applianceretailer.com.au/wp-content/uploads/2020/10/15161458/Apple-iPhone-12-1200x900-1.jpg",
  "https://static1.pocketnowimages.com/wordpress/wp-content/uploads/2023/09/pbi-iphone-15-pro-max.png",
  
];

const variants = {
  initial: { y: 300, opacity: 0, position: "absolute" },
  animate: { y: 0, opacity: 1, position: "absolute" },
  exit: { y: 0, opacity: 0, position: "absolute" },
};
function IPhone({duration}) {
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
        IPhone
      </div>
    </div>
  );
}

export default IPhone;
