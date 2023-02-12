import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import AuthLayout from "./layout/authLayout.component";
import UserLayout from "./layout/userLayout.component";
import Home from "./pages/Home/home.component";
import SignIn from "./pages/Signin/signin.component";
import SignUp from "./pages/Signup/signup.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="signin" element={<SignIn />} />
        <Route path="signin" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
