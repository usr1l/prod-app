import '@app/globals.css';

import React from 'react'

function IconLabel({
  iconClass,
  labelText,
  containerClass,
  onClick
}) {
  return (
    <div onClick={onClick} className={containerClass}>
      <div>
        <i className={iconClass}></i>
      </div>
      <span>{labelText}</span>
    </div>
  );
};

export default IconLabel;
