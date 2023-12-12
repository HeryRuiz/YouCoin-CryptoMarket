import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

function Layout({setArrowStyle, resetArrowStyle}) {
  return (
    <>
      <Nav setArrowStyle={setArrowStyle} resetArrowStyle={resetArrowStyle}/>
      <Outlet />
    </>
  );
}

export default Layout;
