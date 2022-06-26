import React from 'react';
import Categories from '../Categories';
import Copyright from '../Copyright';
import Footer from '../Footer';
// import Hero from '../Hero';
import Info from '../Info';
import Navbar from '../Navbar';
import News from '../News';
import Products from '../Products';
import Slider from '../Slider';

const Home = () => {
  return (
      <div>
          <Info/>
          <Navbar/>
          <Slider/>
          <Categories/>
          <Products/>
          <News/>
          <Footer/>
          <Copyright/>
      </div>
  )
}

export default Home