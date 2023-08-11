import React, { useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Store from "./Component/Store";
import About from "./Component/About";
import Home from "./Component/Home";
import ContactUS from "./Component/ContactUs";
import Header from "./Component/Header";
import Cart from "./Component/Cart";
import CartProvider from "./Store/CartProvider";
import SingleProductDetails from "./Component/SingleProductDetails";

const Routes = () => {
  const [modalShow, setModalShow] = useState(false);
  const showModal = () => {
    setModalShow(true);
  };
  return (
    <Switch>
      <Route path="/store/:productId" component={SingleProductDetails} />

      <CartProvider>
        <Header showModal={showModal} />
        {!!modalShow && (
          <Cart show={modalShow} onHide={() => setModalShow(false)} />
        )}
        <Route path="/store" exact>
          <Store />
        </Route>

        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>
        <Route path="/contactus">
          <ContactUS />
        </Route>
      </CartProvider>
    </Switch>
  );
};

export default Routes;