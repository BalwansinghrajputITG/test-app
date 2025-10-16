import React from "react";
import { motion } from "framer-motion";
const Background = () => {
  return (
    <div className="bg w-full h-full bg-purple-900 flex">
      <motion.img
        initial={{ x: "-100px", opacity:0}}
        animate={{ x: "0px" ,opacity:1}}
        transition={{ duration: 1 }}
        src="/images/Learning-amico.svg"
        style={{ width: "800px", height: "700px", pointerEvents: "none" }}
      />
      <motion.img
        initial={{ y: "50px",opacity:0 }}
        animate={{ y: "0px",opacity:1 }}
        transition={{ duration: 1 }}
        src="/images/undraw_data-at-work_3tbf.svg"
        style={{ width: "950px", height: "500px", pointerEvents: "none" }}
      />
    </div>
  );
};

export default Background;
