import React, { useEffect, useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import Tavar from './Tavar';
import Main from './Main';
import Fooder from './Fooder';
import AOS from 'aos';
import 'aos/dist/aos.css'


const Frame = ({ shop, setShop }) => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <Header shop={shop} setShop={setShop} />
      <div>
        <Hero />
        <Tavar />
        <Main shop={shop} setShop={setShop} />
      </div>
      <Fooder />
    </div>
  )
}

export default Frame