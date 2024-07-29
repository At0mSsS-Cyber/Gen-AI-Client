import React, { useState } from "react";
import NavComponent from "./Navbar";

const SmallScreensNavbar = () => {
  // declare 'translate' as a state variable
  const [translate, setTranslate] = useState(true);

  return (
    <div>
      <button
        className="absolute bottom-0 right-7 w-10 h-9 bg-gray-400 text-gray-100 rounded outline-none flex items-center justify-center text-xl"
        onClick={() => setTranslate(!translate)}
      >
        {translate ? <span>&#9776;</span> : <span>&times;</span>}
      </button>
      {/*hide and show the sidebar list based on whether translate is true or false*/}
      <div
        id="sidebar-list"
        className={`fixed top-16 right-0 h-[90vh] w-[170px] bg-gray-400 z-50 transition-transform duration-500 ${
          translate ? "translate-x-[170px]" : "translate-x-0"
        }`}
      >
        <NavComponent
          navClass="flex flex-col text-left justify-around space-y-2 h-2/5 mx-auto mt-12 w-4/5"
          linkClassName="text-gray-100 cursor-pointer py-1 space-y-2"
          onClick={() => setTranslate(true)} // set translate to true to hide the sidebar list
        />
      </div>
    </div>
  );
};

export default SmallScreensNavbar;
