'use client';

import AuthProtect from '@AuthProtect';
import React, { useEffect, useState } from 'react';
import Button from '@components/Button';
import '@app/globals.css';
import Checkbox from '@components/Modals/CheckBox';

function Generate() {
  const [ textInput, setTextInput ] = useState('');
  const [ fileInput, setFileInput ] = useState('');
  const [ textCount, setTextCount ] = useState(0);

  useEffect(() => {
    const len = textInput.length;
    setTextCount(len);
  }, [ textInput ]);


  const navButtonClass = 'px-0 text-[16px]';
  const navContainerClass = 'mr-4 py-2 box-border opacity-60 border-b-2 flex cursor-pointer ';
  return (
    <>
      <div className='w-auto m-4 border-b-2 border-gray-300 shadow-md min-w-[900px] min-h-[880px] flex flex-col'>
        <h1 className='h-[100px] w-auto px-10 flex items-center font-bold shadow-lg'>
          MAGIC GENERATOR
          <div className='rounded-3xl bg-site-purple w-28 flex justify-center items-center mx-6 bg-opacity-20 text-[13px] font-normal'>
            Powered by AI
          </div>
        </h1>
        <div className='w-auto border-black px-16 py-8 flex box-border'>
          <div className='w-[60%]'>
            <h1 className='font-bold text-[26px]'>Customize study sets in an instant</h1>
            <h2 className='text-[20px]'>Upload notes, slides, readings or recordings</h2>
            <nav className='w-auto flex mt-4'>
              <Button
                buttonText={'Paste Text'}
                buttonClass={navButtonClass}
                containerClass={navContainerClass}
              />
              <Button
                buttonText={'Upload File from PC'}
                buttonClass={navButtonClass}
                containerClass={navContainerClass}
                disableButton={true}
              />
            </nav>
            <div className='w-auto mt-4'>
              <textarea
                className="w-full bg-site-black bg-opacity-10 rounded-xl focus:outline-none p-4 h-[390px]"
                placeholder="Paste text here."
                aria-label="Paste text here"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
              ></textarea>
              <div className='w-auto flex'>
                <div className='ml-auto text-[12px] font-semibold'>{`${textCount}/60,000 characters`}</div>
              </div>
            </div>
          </div>
          <div className='w-[40%] flex flex-col items-center relative'>
            <div className='w-[70%] border-2 border-black'>
              <h1 className=''>Powered by AI</h1>
              <Checkbox label='FlashCards' />
              <Checkbox label='Summary/Outline' />
            </div>
          </div>
        </div>
        <section className="flex w-full items-center px-16 py-12 shadow-sm bg-blue-300 bg-opacity-20 mt-auto">
          <div className="flex gap-5 justify-between w-full">
            <div className="flex flex-col w-auto justify-between">
              <header className="flex gap-2.5 self-start text-base font-bold">
                <div className="shrink-0 rounded border-2 border-solid border-zinc-900 border-opacity-60 h-[25px] w-[25px]" />
                <h2 className="flex-auto">Publicize your learning set</h2>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9a3b3367bfd0e13347e7f2cfbe8ace5ecb591c2022afb5575a956c93a33c2ee?apiKey=9402e6da52f54ff8ac95beb6e53fe786&" alt="" className="shrink-0 my-auto aspect-square w-[15px]" />
              </header>
              <p className="mt-5 text-xs max-md:max-w-full">
                This product is powered by AI and may include inaccurate or sensitive content. Please avoid submitting personal information.
              </p>
            </div>
            <Button buttonText={'Generate'} icon={'/sparkles.png'} buttonClass={'shadow-sm bg-zinc-900 text-white h-10 disabled:bg-zinc-500 px-4 py-2 '} />
          </div>
        </section>
      </div>
    </>
  )
};


export default AuthProtect(Generate);
