import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Cancel from './pages/Cancel'
import Store from './pages/Store'
import Success from './pages/Success'
import CartProvider from './contexts/CartContext'
const App = () => {
  return (

    <div> 
      <CartProvider>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route index element={<Store/>}/>
        <Route path='success' element={<Success/>}/>
        <Route path='cancel' element={<Cancel/>}/>
      </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App