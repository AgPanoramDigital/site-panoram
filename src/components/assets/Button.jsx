import React from 'react';

const Button = ({ url, nameurl }) => {
  return (
    <a href={url} className="px-8 py-3 bg-black text-zinc-50 rounded-md text-md">
      {nameurl}
    </a>
  );
};

export default Button;