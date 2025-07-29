import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "aos/dist/aos.css";

const images = [
  "https://images.samsung.com/is/image/samsung/p6pim/id/2401/gallery/id-galaxy-s24-s928-490247-sm-s928blbwxid-539387825?$650_519_PNG$",
  "https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-s928-sm-s928bzkqins-539573273?$650_519_PNG$",
  "https://image-us.samsung.com/us/smartphones/galaxy-s24/all-gallery/01_E2_OnlineExclusive_SandstoneOrange_Lockup_1600x1200.jpg?$product-details-jpg$?$product-details-thumbnail-jpg$",
  
];

const variants = {
  initial: { y: 300, opacity: 0, position: "absolute" },
  animate: { y: 0, opacity: 1, position: "absolute" },
  exit: { y: 0, opacity: 0, position: "absolute" },
};
function Saumsung({duration}) {
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
        Saumsung
      </div>
    </div>
  );
}

export default Saumsung;
