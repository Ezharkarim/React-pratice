import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Navbar = () => {

  const items = useSelector((state) => state.cart);

  return (
    <>
      <div className="flex flex-wrap ">
        <div className="bg-slate-700 text-white h-26 flex-auto text-center ">
          <Link to="/">Home</Link>
        </div>
        <div className=" bg-slate-600 text-white h-26 flex-auto text-center">
          <Link to="/Card">Card</Link>
        </div>
        <div className=" bg-slate-600 text-white h-26 flex-auto text-center">
          <Link to="/Items">useRef</Link>
        </div>
        <div className=" bg-slate-600 text-white h-26 flex-auto text-center">
          <Link to="/Practice">Practice</Link>
        </div>
        <div className=" bg-slate-600 text-white h-26 flex-auto text-center">
          <Link to="/Reactquery">Reactquery</Link>
        </div>
        <div className=" bg-slate-600 text-white h-26 flex-auto text-center">
          <Link to="/Form">Form</Link>
        </div>
        <h1 className="cardCount">Card items: {items.length}</h1>
      </div>
    </>
  );
}

export default Navbar