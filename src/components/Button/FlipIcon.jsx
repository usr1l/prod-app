import React from 'react'

function FlipIcon({
  containerClass,
  imgClass
}) {
  return (
    <div
      style={{
        transformStyle: 'ease-in-out',
        transitionDuration: '0.3s',
      }}
      className={`bg-zinc-900 w-[60px] h-[60px] rounded-full flex justify-center items-center hover:bg-zinc-500 ${containerClass}`} >
      <img src='/flipicon.png' className={`w-[30px] h-[30px] ${imgClass}`} />
    </div>
  )
};

export default FlipIcon;
