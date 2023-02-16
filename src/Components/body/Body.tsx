import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../Head/Nav";
import { SideBar } from "../Sidebar/SideBar";

const Body = () => {
  const location = useLocation();
  // all roted components are shown by this body component
  return (
    <>
      <Nav />

      <div className="d-flex ">
        <SideBar />
        <div
          className="mainBody py-3 px-4 "
          style={{
            backgroundColor: "aliceblue",
            width: "100%",
            height: "100vh",
            overflowY: "scroll",
          }}
        >
          <p className="fs-4 m-0 n-blue">
            {location.pathname == "/"
              ? "Dashboard"
              : location.pathname.replaceAll("_", " ").slice(1)}
          </p>
          <p className="fs-6" style={{ color: "#51678f" }}>
            Home{" "}
            {location.pathname == "/"
              ? "/ Dashboard"
              : location.pathname.replace("/", " / ")}
          </p>
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Body;
