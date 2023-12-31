import React from "react";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Routes from "./routes/Routers";

import Carts from "./components/UI/cart/Carts.jsx";
import { useSelector } from "react-redux";

function App() {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <div>
      <Header />

      {showCart && <Carts />}

      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default App;