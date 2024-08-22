import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom"; // react-scroll is a library for scrolling in React
import SmallScreensNavbar from "./SmallScreensNavbar";
import { useWindowWidthAndHeight } from "../../hooks/CustomHook";

const Header = () => {
  // use our custom hook to get the window size
  const [width, height] = useWindowWidthAndHeight();

  return (
    <header className=" fixed top-0 w-full h-16 bg-customBlue flex items-end justify-center shadow-md z-50">
      <div className="w-11/12 flex h-16 items-center justify-between">
        <Link
          to="/"
          className="text-lg cursor-pointer text-gray-100 hover:text-white"
        >
          Home
        </Link>
        {/*if the width of the window is bigger than 1000px use <Navbar/>,
                   else use <SmallScreensNavbar/>*/}
        {width > 1000 ? (
          <Navbar
            navClass="flex justify-around items-center space-x-10 font-bold"
            linkClassName="text-white cursor-pointer"
          />
        ) : (
          <SmallScreensNavbar
            navClass="flex flex-col text-center justify-around h-2/5 space-y-5 mx-auto mt-12 w-4/5"
            linkClassName="text-gray-100 cursor-pointer py-1"
          />
        )}
      </div>
    </header>
  );
};

export default Header;
