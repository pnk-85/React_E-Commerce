import React,{useState} from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUS from './Component/ContactUs';
import Header from'./Component/Header';
import Cart from './Component/Cart';
import Footer from './Component/Footer';
import Store from './Component/Store';
import About from './Component/About';
import Home from './Component/Home';
import CartProvider from './Store/CartProvider';
import SingleProduct from './Component/SingleProduct';


function App() {
  const [modalShow, setModalShow] = useState(false);
  const showModal = () => {
    setModalShow(true);
  };
  return (
    <CartProvider>
      <Header showModal={showModal} />
      {!!modalShow && (
        <Cart show={modalShow} onHide={() => setModalShow(false)} />
      )}

      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>

      <Route path="/home">
        <Home />
      </Route>

      <Route path="/store" exact>
        <Store />
      </Route>
      <Route path="/store/:id">
        <SingleProduct />
      </Route>



      <Route path="/about">
        <About />
      </Route>
      <Route path="/contactus">
        <ContactUS />
      </Route>

      <Footer />
    </CartProvider>
  );
}
export default App;
