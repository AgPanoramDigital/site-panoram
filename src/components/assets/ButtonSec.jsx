import React from 'react';

const ButtonSec = ({ url, nameurl }) => {
  return (
    <a href={url} className="px-8 py-3 bg-white text-black rounded-md text-md">
      {nameurl}
    </a>
  );
};

export default ButtonSec;