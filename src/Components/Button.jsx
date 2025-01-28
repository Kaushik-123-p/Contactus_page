import React from "react";

const Button = ({ isOutline, icon, text, ...rest }) => {
  return (
    <button
      {...rest}
      className={`${
        isOutline
          ? "flex justify-center items-center gap-2 text-base bg-white  border-2 border-black rounded-md px-6 py-2 w-full mt-2 cursor-pointer"
          : "flex justify-center items-center gap-2 text-base bg-black text-white border-2  border-black rounded-md px-6 py-2 mt-2 cursor-pointer h-10"
      }`}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
