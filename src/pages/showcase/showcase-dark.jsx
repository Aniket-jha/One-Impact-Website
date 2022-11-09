import React from "react";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar.full-menu";
import ShowcasesFullScreen from "../../components/Showcases-full-screen/showcases-full-screen";
import DarkTheme from "../../layouts/Dark";
import { client } from "../../../lib/client";
const ShowcaseDark = ({banners}) => {
  console.log(banners)
  return (
    <DarkTheme>
      <NavbarFullMenu />
      <ShowcasesFullScreen banners={banners} />
    </DarkTheme>
  );
};



export default ShowcaseDark;
