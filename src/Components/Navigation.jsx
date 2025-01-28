import React from "react";

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center mx-32">
      <div>
        <img src="../public/Images/logo.png" alt="logo" />
      </div>
      <ul className="flex gap-5 font-bold px-2">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
};

export default Navigation;
