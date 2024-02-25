import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar className="mb-2" />
      <div className="main">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
