import React, { useState } from 'react';

function SearchBar({
  icon,
  placeholder,
  alt
}) {

  const [ searchInput, setSearchInput ] = useState('');

  return (
    <div className="flex gap-1 px-4 py-2 text-base font-medium rounded-3xl box-border border border-solid border-zinc-900 text-zinc-900 text-opacity-50">
      {icon && <img loading="lazy" src={icon} className="shrink-0 aspect-square w-[25px]" alt={alt} />}
      <input
        className="flex-auto my-auto border-none bg-transparent text-black text-opacity-50 focus:outline-none"
        placeholder='Ask anything'
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
      />
    </div>
  )
};

export default SearchBar;
