import { useMotionValue, useSpring, useTransform } from "framer-motion";
import React from "react";
import Card from ".";

export default function TiltCard() {

  // instead of using state, we use useMotionValue to store our motion values
  // lower bound is -0.5, upper bound is 0.5, so our starting value is 0
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // // create a spring animation to smooth out transform transitions, gradual easing
  // useSpring is broken, add "type: 'spring' to the object passed in as the second argument to useSpring"
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

  // use variants to create declarative animations
  const cardVariants = {
    hover: {
      scale: 1.2,
      // rotateY: 180
    }
  };

  // handleMouseLeave resets the x and y motion values to 0
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  }

  // handleMouseMove tracks the mouse position and updates the x and y motion values
  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const { width, height } = rect;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // gives a range of values from -0.5 to 0.5
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;

    // storing the values in our motion value state hooks
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseClick = async () => ({
  });

  // put the styles together and put into component
  const style = {
    rotateX,
    rotateY,
    transformStyle: 'preserve-3d',
    // transform: "rotateY(40deg) rotateX(50deg)"
  };

  return (
    <div className="center justify-between flex-col">
      <Card
        handleMouseLeave={handleMouseLeave}
        handleMouseClick={handleMouseClick}
        handleMouseMove={handleMouseMove}
        handleMouseHover='hover'
        style={style}
        variants={cardVariants}
      />
    </div>
  );
}
