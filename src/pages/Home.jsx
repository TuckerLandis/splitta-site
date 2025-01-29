import React from "react";
import { motion } from "framer-motion";
import "./Home.css"; // Import the CSS file

const Home = () => {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0, scale: 0.8, x: -300, y: 0 }}
      animate={{ opacity: 1, scale: 1, x: -150, y: -275 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="vertical-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, rotate: [0, 10, -10, 0] }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.1 }}
      >
        SPLITTA
      </motion.h1>
      {/* <motion.p
        className="vertical-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        Feel free to browse our website and learn more about us.
      </motion.p> */}
    </motion.div>
  );
};

export default Home;
