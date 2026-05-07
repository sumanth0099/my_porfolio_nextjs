"use client";
import React from "react";
import { motion } from "framer-motion";

const TypingAnimation = React.memo(({ 
  text = "", 
  className, 
  staggerDelay = 0.03, 
  speed = 1,
  byWord = false,
  showCursor = true,
  cursorClassName = "w-[2px] h-[1em] bg-blue-500 ml-1 inline-block"
}) => {
  const [complete, setComplete] = React.useState(false);
  const items = React.useMemo(() => byWord ? text.split(" ") : Array.from(text || ""), [text, byWord]);

  const container = {
    hidden: { opacity: 1 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: (staggerDelay / speed) * (byWord ? 2 : 1), 
        delayChildren: 0.04 * i,
        onComplete: () => setComplete(true)
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      display: "inline-block",
      transition: {
        duration: 0.1
      },
    },
    hidden: {
      opacity: 0,
      display: "none"
    },
  };

  const cursorVariants = {
    blinking: {
      opacity: [1, 0],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <motion.div
      style={{ display: "inline-flex", flexWrap: "wrap", alignItems: "baseline" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      onAnimationComplete={() => setComplete(true)}
      className={`${className} gpu`}
    >
      {complete ? (
        <span>{text}</span>
      ) : (
        <>
          {items.map((item, index) => (
            <motion.span 
              variants={child} 
              key={index}
              className="inline-block"
            >
              {item === " " ? "\u00A0" : item}
              {byWord && index !== items.length - 1 ? "\u00A0" : ""}
            </motion.span>
          ))}
          {showCursor && (
            <motion.span
              variants={cursorVariants}
              animate="blinking"
              className={cursorClassName}
              style={{ display: "inline-block" }}
            />
          )}
        </>
      )}
    </motion.div>
  );
});

TypingAnimation.displayName = "TypingAnimation";
export default TypingAnimation;
