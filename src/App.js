import React,{useState} from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUS from './Component/ContactUs';
import Header from'./Component/Header';
import Cart from './Component/Cart';
import Footer from './Component/Footer';
import Store from './Component/Store';
import About from './Component/About';
import Home from './Component/Home';


function App() {
  const [modalShow, setModalShow] = useState(false);
  const showModal = () => {
    setModalShow(true);
  };
  return (
    <>
      <Header showModal={showModal} />
      {!!modalShow && (
        <Cart show={modalShow} onHide={() => setModalShow(false)} />
      )}

      <Route path="/home">
        <Home />
      </Route>
      <Route path="/store">
        <Store />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contactus">
        <ContactUS />
      </Route>

      <Footer />
    </>
  );
}
export default App;
