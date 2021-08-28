import React from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <div className="grid grid-rows-5 text-center items-center bg-yellow-500">
      <Link className="p-4" to="/">
        Home
      </Link>
      <Link className="p-4" to="/menu">
        Menu
      </Link>
      <Link className="p-4" to="/About">
        About
      </Link>
      <Link className="p-4" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;
