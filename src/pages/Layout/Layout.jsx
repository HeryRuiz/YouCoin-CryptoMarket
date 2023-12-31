import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function Layout({ setArrowStyle, resetArrowStyle, toSection }) {
  return (
    <>
      <Nav
        setArrowStyle={setArrowStyle}
        resetArrowStyle={resetArrowStyle}
        toSection={toSection}
      />
      <Outlet />
    </>
  );
}

export default Layout;
