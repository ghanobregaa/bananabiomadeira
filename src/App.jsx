import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Detials from "./pages/details/Details";
import Cart from "./pages/cart/Cart";

export default function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/cart" Component={Cart} />
      <Route path="/details/:uid" Component={Detials} />
    </Routes>
  );
}
