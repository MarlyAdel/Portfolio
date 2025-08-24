import React from "react";
import { motion } from "framer-motion";

const AnimatedLogo = () => {
  return (
    <>
      <motion.svg
        width="22"
        height="22"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "linear",
        }}
      >
        {/* Circle Border */}
        <circle
          cx="50"
          cy="50"
          r="44"
          stroke="#D8B4FE"
          strokeWidth="5"
          fill="none"
        />

        {/* </> Text */}
        <text
          x="50"
          y="57"
          textAnchor="middle"
          fontSize="33"
          fontWeight={900}
          fontFamily="monospace"
          fill="currentColor"
        >
          {"</>"}
        </text>
      </motion.svg>
    </>
  );
};

export default AnimatedLogo;
