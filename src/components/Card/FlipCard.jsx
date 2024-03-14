import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { useMotionValue, useSpring } from 'framer-motion';

function FlipCard({
  front,
  back,
  icon
}) {
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
    <ReactCardFlip
      containerClassName='w-full box-border'
      flipDirection='horizontal'
      isFlipped={flipped}>
      <div
        className='hover:cursor-pointer relative box-border'
        onClick={handleMouseClick}
      >{front}
        {icon}
      </div>
      <div
        className='hover:cursor-pointer box-border'
        onClick={handleMouseClick}
      >{back}
        {icon}
      </div>
    </ReactCardFlip>
  )
};

export default FlipCard;
