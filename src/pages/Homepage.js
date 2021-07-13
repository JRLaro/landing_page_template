import React, { Fragment, useState } from "react";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import { homeObj1, homeObj2, homeObj3} from "../components/Info/Data";
import Info from "../components/Info/Info";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";
import Sidebar from "../components/Sidebar/Sidebar";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Info {...homeObj1} />
      <Info {...homeObj2} />
      <Services />
      <Info {...homeObj3} />
      <Footer />
    </Fragment>
  );
};

export default Homepage;
