import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight, FaJediOrder } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // const ButtonClick =()=>{
  //     setOpen()
  // }

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <FaJediOrder />
          </Link>
          <button
            type="button"
            className="nav-btn"
            onClick={() => setOpen(!open)}
          >
            <FaAlignRight />
          </button>
        </div>
        <ul className={open ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
