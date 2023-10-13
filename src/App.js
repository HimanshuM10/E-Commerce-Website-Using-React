import './App.css';

import React from 'react';
import NavCop from './components/NavbarC';
import ShoppingComponent from './components/ShoppingComponent';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';
import ControlledCarousel from './components/Slider';
import Login from './components/login';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Aboutus from './components/About';

function App() {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/',
      element: <ShoppingComponent/>
    },
    {
      path: '/about',
      element: <Aboutus/>
    },
  ]);
  return (
    <>
      <ProgressBar />
      <NavCop />
      <ControlledCarousel />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
