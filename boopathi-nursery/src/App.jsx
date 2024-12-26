import React, { useState } from 'react'
import LandingPage from './pages/LandingPage'
import ProductList from './pages/ProductList'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'

const App = () => {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={< LandingPage />}></Route>
          <Route path='/product-list' element={<ProductList />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App