import React, { useState } from 'react';

function SearchBar({
  icon,
  placeholder,
  alt,
  containerClass,
}) {

  const [ searchInput, setSearchInput ] = useState('');

  return (
    <div className={`flex items-center mx-4 justify-center gap-1 py-2 text-base font-medium rounded-3xl border border-solid border-site-black text-site-black text-opacity-50 ${containerClass}`}>
      {icon && (
        <img
          src={icon}
          className="shrink-0 aspect-square w-[25px] ml-4"
          alt={alt} />
      )}
      <input
        className="flex-auto w-auto border-none bg-transparent text-opacity-50 focus:outline-none"
        placeholder='Ask anything'
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
      />
    </div>
  )
};

export default SearchBar;
