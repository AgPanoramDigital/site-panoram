import React from "react";

const ButtonSec = ({ url, title }) => {
  return (
    <a
      href={url}
      className="px-8 py-3 bg-white text-black rounded-md text-md border border-solid border-black/20 hover:bg-black hover:text-white"
    >
      {title}
    </a>
  );
};

export default ButtonSec;
