import React from "react";
import { motion } from "framer-motion";
import Content from "./partials/Content"; //c uppercase; 
import { fadeLeft, motionStep } from "@config/motion";

const Education = () => {
  return (
    <section id="experience" className="container">
      <motion.h1
        variants={fadeLeft}
        {...motionStep}
        className="flex items-center gap-2 text-lg md:text-3xl font-medium text-gray-300"
      >
        <span className="text-gray-500 font-mono">02. </span>
        Education
      </motion.h1>

      <div className="mt-14">
        <Content />
      </div>
    </section>
  );
};

export default Education;
