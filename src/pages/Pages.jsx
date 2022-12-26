import React from 'react';
import Home from './Home';
import Login from './Login';
import Cart from './Cart';
import { Route, Routes, useLocation } from "react-router-dom";
import  Register from './Register';
import { AnimatePresence } from "framer-motion"


function Pages() {
  const location = useLocation();
  return (
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
      </AnimatePresence>
      
  )
}

export default Pages