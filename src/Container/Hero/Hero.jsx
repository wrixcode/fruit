import React from "react";
import fruit from "../../assets/fruit-plate.png";
import { IoBagHandleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { faderight } from "../../Utility/animation";
const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:px-16 md:grid-cols-2 min-h-[600px] m">
        {/* content section */}
        <div className="flex flex-col justify-center py-12 md:py-0 relative z-10">
          <div className="text-center ">
            <h1
            
             
              className="leading-relaxed text-5xl capitalize font-bold"
            >
              Healthy
              <br />
              <h1>
                Fresh <span className="text-secondary"> Fruit</span>
              </h1>
            </h1>
          </div>
          <motion.h2
            variants={faderight(0.7)}
            initial='hidden'
            animate="visible"
            
            className="text-center text-xl"
          >
            Order Now For Fresh Healthy Life
          </motion.h2>
          <motion.p
            variants={faderight(1.2)}
            initial="hidden"
            animate="visible"
            className="text-gray-400 text-center px-6"
          >
            Lorem ipsum dolor sit amet, ;edmaiores laudantium error temporibus
            repellen dus tempora, inventore, quos totam molestiae distincti o
            neque excepturi.
          </motion.p>
          {/*button section*/}
          <motion.div


           
            className="flex  justify-center pt-5"
          >
            <button className="btn-primary text-center  flex gap-2">
              <span>
                <IoBagHandleOutline />
              </span>
              Order Now
            </button>
          </motion.div>
        </div>

        {/* image section */}
        <motion.img 
    
        src={fruit} alt="" />
      </div>
    </section>
  );
};

export default Hero;
