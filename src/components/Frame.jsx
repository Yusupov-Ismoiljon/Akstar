import React, { useEffect, useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import Tavar from './Tavar';
import Main from './Main';
import Fooder from './Fooder';
import AOS from 'aos';
import 'aos/dist/aos.css'


const Frame = ({shop, addCart, addCart1}) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <Header shop={shop}/>
      <div>
        <Hero />
        <Tavar />
        <Main addCart={addCart} addCart1={addCart1}/>
      </div>
      <Fooder />
    </div>
  )
}

export default Frame