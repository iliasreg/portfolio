"use client";

import { motion } from "framer-motion";

const TextAnimation = () => {
  const text = "Hello, I'm ILIAS, a budding developer with a flair for coding and a passion for problem-solving.";

  return (
    <motion.h1 className="text-black font-light text-4xl md:text-5xl text-center text-wrap select-none">
           {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 5, delay: index * 0.05 }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default TextAnimation;
