
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Video() {
  const containerRef = useRef(null);

  // Connect scroll to section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"], // From top of screen to top of section
  });

  // Motion effects
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0.4, 0.7], [1, 0]);

  return (
    <section ref={containerRef} className="hidden relative h-[250vh] w-full sm:block ">   
      <div className="hidden sticky top-0 h-auto w-[100%]  mt-5  sm:block  ">
        
        <motion.video
          className="w-full h-full  pointer-events-none rounded-2xl relative "
          style={{ scale, y, opacity }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source
              src="https://www.apple.com/105/media/us/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome/xlarge.mp4"
              type="video/mp4"
              
            />
        </motion.video>
      </div>
    </section>
  );
}

