import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import UserLayout from "./layout/userLayout.component";
import Home from "./pages/Home/home.component";

function App() {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
