import React, { useEffect, useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import Tavar from './Tavar';
import Main from './Main';
import Fooder from './Fooder';
import AOS from 'aos';
import 'aos/dist/aos.css'


const Frame = ({ shop, setShop }) => {
  const api = [
    {
      id: 1,
      img: './img/gitar.png',
      ak: 'Акустические гитары',
      lc: 'lc-3400',
      pul: '11 360 ₽',
      karzinka: 'В корзину'
    },
    {
      id: 2,
      img: './img/gitar.png',
      ak: 'Акустические гитары',
      lc: 'lc-3400',
      pul: '11 360 ₽',
      karzinka: 'В корзину'
    },
    {
      id: 3,
      img: './img/gitar.png',
      ak: 'Акустические гитары',
      lc: 'lc-3400',
      pul: '11 360 ₽',
      karzinka: 'В корзину'
    },
    {
      id: 4,
      img: './img/gitar.png',
      ak: 'Акустические гитары',
      lc: 'lc-3400',
      pul: '11 360 ₽',
      karzinka: 'В корзину'
    },
    {
      id: 5,
      img: './img/gitar.png',
      ak: 'Акустические гитары',
      lc: 'lc-3400',
      pul: '11 360 ₽',
      karzinka: 'В корзину'
    },
    {
      id: 6,
      img: './img/gitar.png',
      ak: 'Акустические гитары',
      lc: 'lc-3400',
      pul: '11 360 ₽',
      karzinka: 'В корзину'
    },
    {
      id: 7,
      img: './img/gitar.png',
      ak: 'Акустические гитары',
      lc: 'lc-3400',
      pul: '11 360 ₽',
      karzinka: 'В корзину'
    },
    {
      id: 8,
      img: './img/gitar.png',
      ak: 'Акустические гитары',
      lc: 'lc-3400',
      pul: '11 360 ₽',
      karzinka: 'В корзину'
    },
    {
      id: 9,
      img: './img/gitar.png',
      ak: 'Акустические гитары',
      lc: 'lc-3400',
      pul: '11 360 ₽',
      karzinka: 'В корзину'
    },
    {
      id: 10,
      img: './img/gitar.png',
      ak: 'Акустические гитары',
      lc: 'lc-3400',
      pul: '11 360 ₽',
      karzinka: 'В корзину'
    },
    {
      id: 11,
      img: './img/gitar.png',
      ak: 'Акустические гитары',
      lc: 'lc-3400',
      pul: '11 360 ₽',
      karzinka: 'В корзину'
    },
    {
      id: 12,
      img: './img/gitar.png',
      ak: 'Акустические гитары',
      lc: 'lc-3400',
      pul: '11 360 ₽',
      karzinka: 'В корзину'
    },
    {
      id: 13,
      img: './img/gitar.png',
      ak: 'Акустические гитары',
      lc: 'lc-3400',
      pul: '11 360 ₽',
      karzinka: 'В корзину'
    },
    {
      id: 14,
      img: './img/gitar.png',
      ak: 'Акустические гитары',
      lc: 'lc-3400',
      pul: '11 360 ₽',
      karzinka: 'В корзину'
    },
    {
      id: 15,
      img: './img/gitar.png',
      ak: 'Акустические гитары',
      lc: 'lc-3400',
      pul: '11 360 ₽',
      karzinka: 'В корзину'
    },
    {
      id: 16,
      img: './img/gitar.png',
      ak: 'Акустические гитары',
      lc: 'lc-3400',
      pul: '11 360 ₽',
      karzinka: 'В корзину'
    }
  ]
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
        <Main shop={shop} setShop={setShop} api />
      </div>
      <Fooder />
    </div>
  )
}

export default Frame