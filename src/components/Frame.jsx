import React, { useEffect, useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import Tavar from './Tavar';
import Main from './Main';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { api } from '../data';
import card from '@material-tailwind/react/theme/components/card';
import { Card, Option, Select } from '@material-tailwind/react';
import MainLayouts from '../layouts/MainLayouts';


const Frame = ({ shop, addCart, addCart1, addLike, like, removeLike }) => {
  const [menuKatal, setMenuKatal] = useState(false);
  const [sozlash, setSozlash] = useState(false);
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
          <ul className="flex items-center space-x-1 mb-[30px]">
            <li className="flex items-center">
              <a className="font-normal text-xs leading-normal logo mr-1" href="#">
                Каталог
              </a>
              <img className="w-4 h-4" src="./img/chevron.svg" alt="" aria-hidden="true" />
            </li>
            <li className="flex items-center">
              <a className="font-normal text-xs leading-normal logo mr-1" href="#">
                Струнные
              </a>
              <img className="w-4 h-4" src="./img/chevron.svg" alt="" aria-hidden="true" />
            </li>
            <li className="flex items-center">
              <a className="font-normal text-xs leading-normal logo mr-1" href="#">
                Гитары
              </a>
              <img className="w-4 h-4" src="./img/chevron.svg" alt="" aria-hidden="true" />
            </li>
            <li className="flex items-center">
              <a className="font-normal text-xs leading-normal icon" href="#">
                Акустические гитары
              </a>
            </li>
          </ul>
          <div className="relative mb-6">
            <button
              data-aos="fade-right"
              onClick={() => setMenuKatal(!menuKatal)}
              className="flex items-center aos-init aos-animate"
            >
              <img className="mr-4" src="./img/menu-sort.svg" alt="" aria-hidden="true" />
              <span className="font-bold text-4xl brend">Каталог</span>
            </button>
            {menuKatal && (
              <div className="md:w-[360px] bg-white absolute shadov rounded-lg p-[30px] -top-[30px] z-40">
                <button onClick={() => setMenuKatal(!menuKatal)} className="flex items-center mb-[30px]">
                  <img className="mr-4" src="./img/x.svg" alt="" aria-hidden="true" />
                  <span className="font-bold text-4xl brend">Каталог</span>
                </button>
                <ul className="space-y-5">
                  <li>
                    <a className="font-normal text-lg leading-normal" href="#">
                      Акустические гитары
                    </a>
                  </li>
                  <li>
                    <a className="font-normal text-lg leading-normal" href="#">
                      Электроакустические гитары
                    </a>
                  </li>
                  <li>
                    <a className="font-normal text-lg leading-normal" href="#">
                      Классические гитары
                    </a>
                  </li>
                  <li>
                    <a className="font-normal text-lg leading-normal" href="#">
                      Укулеле
                    </a>
                  </li>
                  <li>
                    <a className="font-normal text-lg leading-normal" href="#">
                      Гитарное усиление
                    </a>
                  </li>
                  <li>
                    <a className="font-normal text-lg leading-normal" href="#">
                      Струны
                    </a>
                  </li>
                  <li>
                    <a className="font-normal text-lg leading-normal" href="#">
                      Полуакустические гитары
                    </a>
                  </li>
                  <li>
                    <a className="font-normal text-lg leading-normal" href="#">
                      Аксессуары для гитары
                    </a>
                  </li>
                  <li>
                    <a className="font-normal text-lg leading-normal" href="#">
                      Гитарные комплектующие
                    </a>
                  </li>
                  <li>
                    <a className="font-normal text-lg leading-normal" href="#">
                      Щипковые инструменты
                    </a>
                  </li>
                  <li>
                    <a className="font-normal text-lg leading-normal" href="#">
                      Бас-гитары
                    </a>
                  </li>
                  <li>
                    <a className="font-normal text-lg leading-normal" href="#">
                      Электрогитары
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="mb-4">
            <div className="flex items-center justify-between py-6 border-b-2 border-[#191919]">
              <button onClick={() => setSozlash(!sozlash)} className="flex items-center">
                <img className="w-6 mr-2.5" src="./img/sozlash.svg" alt="" />
                <span className="font-bold text-base brend">Фильтр</span>
              </button>
              <div>
                <Select label="По популярности">
                  <Option>По популярности</Option>
                  <Option>Сначала дорогие</Option>
                  <Option>Сначала дешёвые</Option>
                </Select>
              </div>
            </div>
          </div>
          <div className={`relative mb-16`}>
            <div className='absolute mr-5'>
              <MainLayouts menuKatal={menuKatal} setMenuKatal={setMenuKatal} sozlash={sozlash} setSozlash={setSozlash} />
            </div>
            <ul className={`grid grid-cols-1 md:grid-cols-2 ${sozlash ? 'lg:grid-cols-2 md:ml-80 md:pt-0 pt-[760px]' : 'lg:grid-cols-4 ml-0'} xl:grid-cols-5 gap-7`}>
              {api.map((e) => (
                <Main key={e.id} addCart={addCart} addCart1={addCart1} addLike={addLike} removeLike={removeLike} e={e} />
              ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frame