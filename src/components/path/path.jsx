import { motion } from "framer-motion";

import "./path.css";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};

function path() {
  return (
    <div className="container">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="item"
      >
        <motion.path
          d="M 53.5,-0.5 C 54.1667,-0.5 54.8333,-0.5 55.5,-0.5C 69.597,22.7041 83.9303,45.7041 98.5,68.5C 98.5,69.5 98.5,70.5 98.5,71.5C 70.2162,80.2613 42.2162,89.5946 14.5,99.5C 13.5,99.5 12.5,99.5 11.5,99.5C 33.9479,87.441 56.6145,75.6076 79.5,64C 71.6266,49.7523 63.6266,35.5856 55.5,21.5C 47.3099,38.0466 38.9766,54.5466 30.5,71C 40.4566,69.4093 50.4566,68.0759 60.5,67C 40.4235,77.7049 20.0902,87.8716 -0.5,97.5C -0.5,96.8333 -0.5,96.1667 -0.5,95.5C 17.8645,63.7779 35.8645,31.7779 53.5,-0.5 Z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.svg>
    </div>
  );
}

export default path;
