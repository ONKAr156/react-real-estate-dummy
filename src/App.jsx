import React from 'react'
import Sell from './pages/Sell'
import Footer from './pages/Footer'
import Buy from './pages/Buy'
import Navbar from './components/Navbar'
import Test from './pages/Test'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sell' element={<Sell />} />
      <Route path='/buy' element={<Buy />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  // return <>
  // <Test/>
  // </>
}

export default App