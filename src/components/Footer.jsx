import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#1B37A3] text-white'>
      <div className='w-full max-w-[1300px] mx-auto px-10 py-12'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <div>
            <Link to={`/`}>
              <h1 data-aos-delay="100" data-aos="fade-up" className='font-russo font-light md:text-[40.34px] text-[23px] text-white leading-[135%] uppercase mb-7  aos-init aos-animate'>akstar</h1>
            </Link>
            <div className='space-y-4'>
              <span data-aos-delay="100" data-aos="fade-up" className='font-bold text-2xl leading-normal aos-init aos-animate'>Музыкальное сообщество</span>
              <ul className='flex space-x-3'>
                <li data-aos-delay="100" data-aos="fade-up" className='aos-init aos-animate'>
                  <a target="_blank" href="https://t.me/Ismoiljon_12_04">
                    <i className="fa-brands fa-telegram hover:fa-beat fa-2xl text-white"></i>
                  </a>
                </li>
                <li data-aos-delay="100" data-aos="fade-up" className='aos-init aos-animate'>
                  <a target="_blank" href="https://t.me/Ismoiljon_12_04">
                    <i className="fa-brands fa-square-instagram hover:fa-beat fa-2xl text-white"></i>
                  </a>
                </li>
                <li data-aos-delay="100" data-aos="fade-up" className='aos-init aos-animate'>
                  <a target="_blank" href="https://t.me/Ismoiljon_12_04">
                    <i className="fa-brands fa-square-youtube hover:fa-beat fa-2xl text-white"></i>
                  </a>
                </li>
                <li data-aos-delay="100" data-aos="fade-up" className='aos-init aos-animate'>
                  <a target="_blank" href="https://t.me/Ismoiljon_12_04">
                    <i className="fa-brands fa-tiktok fa-2xl text-white"></i>
                  </a>
                </li>
                <li data-aos-delay="100" data-aos="fade-up" className='aos-init aos-animate'>
                  <a target="_blank" href="https://t.me/Ismoiljon_12_04">
                    <i className="fa-brands fa-vk fa-2xl text-white"></i>
                  </a>
                </li>
                <li data-aos-delay="100" data-aos="fade-up" className='aos-init aos-animate'>
                  <a target="_blank" href="https://t.me/Ismoiljon_12_04">
                    <i className="fa-brands fa-vk fa-2xl text-white"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className='flex flex-col space-y-4 mb-7'>
              <span data-aos-delay="100" data-aos="fade-up" className='font-bold text-2xl leading-normal aos-init aos-animate'>Служба поддержки</span>
              <div data-aos-delay="100" data-aos="fade-up" className='aos-init aos-animate'>
                <a className='block mb-2.5' href="tel:+7 (499) 286 87 10">+7 (499) 286 87 10</a>
                <a target="_blank" href="https://akstar.help@gmail.com">akstar.help@gmail.com</a>
              </div>
              <button data-aos-delay="100" data-aos="fade-up" className='w-[165px] text-black bg-white rounded-lg py-2 aos-init aos-animate'>Обратиться</button>
            </div>
            <div>
              <span className='font-normal text-base block leading-normal'>Политика конфиденциальности</span>
              <span className='font-normal text-base leading-normal'>Обработка персональных данных</span>
            </div>
          </div>
          <div>
            <h3 className='font-bold text-2xl leading-normal mb-7'>Меню</h3>
            <ul className='space-y-5'>
              <li>
                <a className='font-normal text-lg leading-normal' href="#">Главная</a>
              </li>
              <li>
                <a className='font-normal text-lg leading-normal' href="#">Школа</a>
              </li>
              <li>
                <a className='font-normal text-lg leading-normal' href="#">Магазин</a>
              </li>
              <li>
                <a className='font-normal text-lg leading-normal' href="#">Блог</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer