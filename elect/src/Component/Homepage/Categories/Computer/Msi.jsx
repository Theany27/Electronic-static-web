import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "aos/dist/aos.css";

const images = [
  "https://www.notebookcheck.net/fileadmin/Notebooks/MSI/special/13th_Gen/MSI_NB_Raider_GE78_photo02_6.png",
  "https://laptopmedia.com/wp-content/uploads/2023/01/1-24-e1672928815516.jpg",
  "https://images.anandtech.com/doci/16422/MSI_NB_GE76%20Raider(Standard)_photo01.jpg",
  
];

const variants = {
  initial: { y: 300, opacity: 0, position: "absolute" },
  animate: { y: 0, opacity: 1, position: "absolute" },
  exit: { y: 0, opacity: 0, position: "absolute" },
};
function Msi({duration}) {
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
        msi
      </div>
    </div>
  );
}

export default Msi;
