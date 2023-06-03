import React from 'react'
import imgages_carousel from './components/carousel'
import Header from './components/header'
import Navbar from './components/navbar'
import Product from './components/product_card'
import Complete_product from './components/complete_product_card'
function App() {

  return (
    <>
      <Header/>
      <Navbar/>
      <Product/>
      
      <Complete_product/>
      
    </>
  )
}

export default App
