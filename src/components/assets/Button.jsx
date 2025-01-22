import React from "react";

const Button = ({ url, nameurl }) => {
  return (
    <a
      href={url}
      className="px-8 py-3 bg-black text-zinc-50 rounded-md text-md border border-solid border-white/20 hover:bg-white/20 backdrop-blur-xl hover:backdrop-blur-xl"
    >
      {nameurl}
    </a>
  );
};

export default Button;
