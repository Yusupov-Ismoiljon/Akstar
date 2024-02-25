import React from 'react'
import { Link } from 'react-router-dom';
import telegramSvg from '../../public/img/telegram-svg.svg';
import instagramSvg from '../../public/img/instagram-svg.svg';

const Footer = () => {
  return (
    <div className='bg-[#1B37A3] text-white'>
      <div className='w-full max-w-[1300px] mx-auto px-5 py-12'>
        <div className="md:flex md:justify-between gap-7">
          <div className='mb-7 md:mb-0'>
            <Link to={`/`}>
              <h1 className='font-russo font-light md:text-[40.34px] text-[23px] text-white leading-[135%] uppercase mb-7 '>akstar</h1>
            </Link>
            <div>
              <ul className='flex space-x-3'>
                <li>
                  <a target="_blank" href="https://t.me/Ismoiljon_12_04">
                    <img className='w-7 h-7' src={telegramSvg} alt="telegram icon" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.instagram.com/">
                    <img className='w-7 h-7' src={instagramSvg} alt="instagram icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='mb-7 md:mb-0 '>
            <h3 className='font-bold text-2xl leading-normal mb-7'>Меню</h3>
            <ul className='space-y-5'>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} className='font-normal text-lg leading-normal' to='/'>Главная</Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} className='font-normal text-lg leading-normal' to='/like'>Любимые</Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} className='font-normal text-lg leading-normal' to={'магазин'}>Корзина</Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} className='font-normal text-lg leading-normal' to={'/ьлог'}>Блог</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className='flex flex-col space-y-4 mb-7'>
              <span className='font-bold text-2xl leading-normal'>Служба поддержки</span>
              <div>
                <a className='block mb-2.5' href="tel:+7 (499) 286 87 10">+7 (499) 286 87 10</a>
                <a target="_blank" href="https://akstar.help@gmail.com">akstar.help@gmail.com</a>
              </div>
            </div>
            <div>
              <span className='font-normal text-base block leading-normal'>Политика конфиденциальности</span>
              <span className='font-normal text-base leading-normal'>Обработка персональных данных</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer