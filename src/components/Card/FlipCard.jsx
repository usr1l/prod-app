import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { motion, useMotionValue, useSpring } from 'framer-motion';

function FlipCard() {
  const [ flipped, setFlipped ] = useState(false);

  const handleMouseClick = () => setFlipped(!flipped);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, {
    type: "spring",
    damping: 18,
    stiffness: 90,
    mass: 0.1,
  });

  const mouseYSpring = useSpring(y, {
    type: "spring",
    damping: 18,
    stiffness: 90,
    mass: 0.1,
  });

  return (
    <motion.div>
      <ReactCardFlip
        flipDirection='horizontal'
        isFlipped={flipped}>
        <div
          onClick={handleMouseClick}
        >Front</div>
        <div
          onClick={handleMouseClick}
        >Back</div>
      </ReactCardFlip>
    </motion.div>
  )
};

export default FlipCard;
