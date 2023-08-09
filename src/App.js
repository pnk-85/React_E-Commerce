import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Store from './Component/Store';
import CartProvider from './Store/CartProvider';
import About from './Component/About';
import RootLayout from './Component/Root';
import Home from './Component/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Store /> },
      { path: "/", element: <Home /> },
      { path: "/store", element: <Store /> },
      { path: "/about", element: <About /> },
    ],
  },
]);


function App() {

  return (
    <>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
    </>
    
  );
}

export default App;
