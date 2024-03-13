import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Button from '@components/Button';

function FlipCard({
  front,
  back
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
      containerClassName='w-full'
      flipDirection='horizontal'
      isFlipped={flipped}>
      <div
        className='hover:cursor-pointer relative'
        onClick={handleMouseClick}
      >{front}
        <div
          style={{
            transformStyle: 'ease-in-out',
            transitionDuration: '0.3s',
          }}
          className="bg-zinc-900 w-[60px] h-[60px] rounded-full flex justify-center items-center absolute bottom-16 right-20 hover:bg-zinc-500" >
          <img src='/flipicon.png' className='w-[30px] h-[30px]' />
        </div>
      </div>
      <div
        className='hover:cursor-pointer'
        onClick={handleMouseClick}
      >{back}
        <div
          style={{
            transformStyle: 'ease-in-out',
            transitionDuration: '0.3s',
          }}
          className="bg-zinc-900 w-[60px] h-[60px] rounded-full flex justify-center items-center absolute bottom-16 right-20 hover:bg-zinc-500" >
          <img src='/flipicon.png' className='w-[30px] h-[30px]' />
        </div>
      </div>
    </ReactCardFlip>
  )
};

export default FlipCard;
