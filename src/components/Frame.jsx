import React, { useEffect, useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import Tavar from './Tavar';
import Main from './Main';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { api, api2, api3, bolg } from '../data';
import card from '@material-tailwind/react/theme/components/card';
import { Card, Option, Select } from '@material-tailwind/react';


const Frame = ({ addCart, addCart1, addLike, removeLike }) => {
  const [select, setSelect] = useState('opt1');
  const add = (e) => {
    setSelect(e);
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div>
        <Hero />
        <Tavar />
        <div className='w-full max-w-[1300px] mx-auto px-10 mt-10'>
          <div className="mb-4">
            <div className="flex items-center justify-between py-6 border-b-2 border-[#191919]">
              <button
                data-aos="fade-right"
                className="flex items-center aos-init aos-animate"
              >
                <img className="mr-4" src="./img/menu-sort.svg" alt="" aria-hidden="true" />
                <span className="font-bold text-4xl brend">Каталог</span>
              </button>
              <div>
                <Select onChange={(e) => add(e)} label="">
                  <Option value='opt1'>Для мужчин</Option>
                  <Option value='opt2'>Для женщин</Option>
                  <Option value='opt3'>Для детей</Option>
                </Select>
              </div>
            </div>
          </div>
          <div className={`relative mb-16`}>
            <ul className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7`}>
              {select === 'opt1'
                ? api.map((e) => (
                  <Main key={e.id} addCart={addCart} addCart1={addCart1} addLike={addLike} removeLike={removeLike} e={e} />
                ))
                : select === 'opt2'
                  ? api2.map((e) => (
                    <Main key={e.id} addCart={addCart} addCart1={addCart1} addLike={addLike} removeLike={removeLike} e={e} />
                  ))
                  : select === 'opt3'
                    ? api3.map((e) => (
                      <Main key={e.id} addCart={addCart} addCart1={addCart1} addLike={addLike} removeLike={removeLike} e={e} />
                    ))
                    : null}
            </ul>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Frame