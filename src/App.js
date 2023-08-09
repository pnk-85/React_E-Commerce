import { useState } from 'react';
import './App.css';
import Store from './Component/Store';
import Header from './Component/Header';
import Cart from './Component/Cart';

function App() {

  const [modalShow, setModalShow] = useState(false);
  const showModal = () => {
    setModalShow(true);
  };

  return (
    <>
    <Header showModal={showModal} />
    <Cart show={modalShow} onHide={() => setModalShow(false)} />

    <Store />
      
    </>
  );
}

export default App;
