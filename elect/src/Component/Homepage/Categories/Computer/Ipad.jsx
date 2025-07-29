import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "aos/dist/aos.css";

const images = [
  "https://www.apple.com/newsroom/images/product/ipad/standard/apple_ipad-pro-spring21_hero_04202021_big.jpg.large.jpg",
  "https://www.resetdigitale.it/128489-thickbox_default/apple-ipad-air-5-2022-256gb-wifi-blue.jpg",
  "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6533/6533563cv11d.jpg",
  
];

const variants = {
  initial: { y: 300, opacity: 0, position: "absolute" },
  animate: { y: 0, opacity: 1, position: "absolute" },
  exit: { y: 0, opacity: 0, position: "absolute" },
};
function Ipad({duration}) {
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
        Ipad
      </div>
    </div>
  );
}

export default Ipad;
