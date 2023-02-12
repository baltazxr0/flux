import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/header.component";

const UserLayout = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
};

export default UserLayout;
