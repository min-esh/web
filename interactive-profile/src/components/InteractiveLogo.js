import React, { useState } from "react";
import { motion } from "framer-motion";

const InteractiveLogo = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      className="interactive-logo"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ scale: 1 }}
      animate={{ scale: isHovered ? 1.2 : 1 }}
      transition={{ duration: 0.4 }}
    >
      <img src="path/to/your/logo.svg" alt="Interactive Logo" />
    </motion.div>
  );
};

export default InteractiveLogo;
