import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/footer.component";
import Header from "../components/Header/header.component";

const UserLayout = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer/>
    </Fragment>
  );
};

export default UserLayout;
