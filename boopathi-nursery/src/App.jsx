import React, { useState } from 'react'
import LandingPage from './pages/LandingPage'
import ProductList from './pages/ProductList'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CartSlice from './pages/CartSlice'

const App = () => {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={< LandingPage />}></Route>
          <Route path='/product-list' element={<ProductList />}></Route>
          <Route path='/cart' element={<CartSlice />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App