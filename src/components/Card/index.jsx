'use client';

import React from 'react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import FlashCard from './FlashCard';
import FlipCard from './FlipCard';
import './card.css';

// base card component
export default function Card({
  handleMouseLeave,
  handleMouseClick,
  handleMouseMove,
  handleMouseHover,
  initial,
  animate,
  borderClass,
  scope,
  style,
  transition,
  className,
  variants,
  children
}) {

  const checkClassName = className ? className : 'center card h-96 w-96 border-grey-100 border-card box-border rounded-xl px-8 py-20 shadow-top-left-light bg-white';
  const checkTransition = transition ? transition : { ease: "easeInOut", duration: 1 };
  // use motion div, and plug into the div in styles
  return (
    <div className={`${borderClass}`}>
      <motion.div
        whileHover={handleMouseHover}
        onClick={handleMouseClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={initial}
        animate={animate}
        transition={checkTransition}
        style={style}
        scope={scope}
        className={checkClassName}
        variants={variants}
      >{children}
      </motion.div>
    </div>
  )
};

export { TiltCard, FlashCard, FlipCard };
