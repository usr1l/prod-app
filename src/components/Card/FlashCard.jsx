import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import ReactCardFlip from 'react-card-flip';
import React, { useState } from "react";
import Card from ".";

export default function FlashCard({
  border,
  front,
  back
}) {

  const [ flipped, setFlipped ] = useState(false);

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

  const rotateX = useTransform(
    mouseYSpring,
    [ -0.5, 0.5 ],
    [ "21deg", "-21deg" ]
  );

  const rotateY = useTransform(
    mouseXSpring,
    [ -0.5, 0.5 ],
    [ "-21deg", "21deg" ]
  );

  const handleMouseClick = (e) => {
    setFlipped(!flipped);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const { width, height } = rect;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const flipCardVariations = {
    rest: {
      scale: 1,
    },
    hover: {
      scale: 1.2,
    }
  };

  return (
    <motion.div
      className={`${border}`}
      whileHover='hover'
      transition={{ ease: "easeInOut", duration: 1 }}
      variants={flipCardVariations}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
    >
      <ReactCardFlip
        isFlipped={flipped}
        flipDirection="horizontal"
        containerClassName='relative'
      >
        <Card
          handleMouseClick={handleMouseClick}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >{front}
        </Card>
        <Card
          handleMouseClick={handleMouseClick}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >{back}
        </Card>
      </ReactCardFlip>
    </motion.div>
  )
}
