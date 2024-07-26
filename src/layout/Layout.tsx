import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header"; // Update the path as necessary

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="pt-16"> {/* Add padding-top to prevent content from hiding under the fixed header */}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
