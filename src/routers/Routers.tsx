import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import Appbar from "../components/Appbar";
import Footer from "../components/Footer";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services";

const Routers = () => {
  return useRoutes([
    // automatic
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/contact",
      element: <Blog />,
    },
    {
      path: "portfolio",
      element: <Portfolio />,
    },
    {
      path: "services",
      element: <Services />,
    },
  ]);
};

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <Appbar />
      <Routers />
      <Footer />
    </BrowserRouter>
  );
};
export default AppWrapper;
