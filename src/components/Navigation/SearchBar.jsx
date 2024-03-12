import React from 'react';

function SearchBar({ icon, placeholder, alt }) {
  return (
    <div className="flex gap-2.5 px-4 py-2 text-base font-medium rounded-3xl border border-solid border-zinc-900 text-zinc-900 text-opacity-50">
      {icon && <img loading="lazy" src={icon} className="shrink-0 aspect-square w-[25px]" alt={alt} />}
      <div className="flex-auto my-auto">{placeholder}</div>
    </div>
  )
};

export default SearchBar;
