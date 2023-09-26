import React, { useState } from 'react'

const Tavar = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <section className="bg-[#1B37A3] py-7">
      <div className="w-full max-w-[1300px] mx-auto px-10">
        <div className="lg:flex justify-between gap-y-8 items-center">
          <div className="lg:mb-0 mb-5 text-white">
            <h2 data-aos="fade-right" className="font-bold md:text-5xl text-2xl mb-[30px] block aos-init aos-animate">Поступление новых товаров</h2>
            <button data-aos="fade-up" className="bg-white text-black rounded-[10px] text-lg font-semibold md:py-4 md:px-9 py-2 px-5 aos-init aos-animate">Перейти в каталог</button>
          </div>
          <div>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-5">
              <li data-aos-delay="0" data-aos="fade-up" className="text-white relative aos-init aos-animate">
                <button className='absolute top-3 right-3 z-30 text-xl'>
                  <i className={`fa-solid fa-heart icon`}></i>
                </button>
                <div className="bg-white rounded-xl py-4">
                  <img className="w-full" src="./img/gitar.png" alt="new product" />
                </div>
                <div className="py-3">
                  <span className="font-medium text-sm text-[#DEDEDE]">Акустические гитары</span>
                  <h3 className="font-bold text-sm sm:text-base">LC-3400</h3>
                  <span className="font-extrabold text-base sm:text-lg">11 360 ₽</span>
                </div>
              </li>
              <li data-aos-delay="300" data-aos="fade-up" className="text-white relative aos-init aos-animate">
                <button className='absolute top-3 right-3 z-30 text-xl'>
                  <i className={`fa-solid fa-heart icon`}></i>
                </button>
                <div className="bg-white rounded-xl py-4">
                  <img className="w-full" src="./img/gitar.png" alt="new product" />
                </div>
                <div className="py-3">
                  <span className="font-medium text-sm text-[#DEDEDE]">Акустические гитары</span>
                  <h3 className="font-semibold text-sm sm:text-base">LC-3400</h3>
                  <span className="font-bold text-base sm:text-lg">11 360 ₽</span>
                </div>
              </li>
              <li data-aos-delay="600" data-aos="fade-up" className="text-white relative aos-init aos-animate">
                <button className='absolute top-3 right-3 z-30 text-xl'>
                  <i className={`fa-solid fa-heart icon`}></i>
                </button>
                <div className="bg-white rounded-xl py-4">
                  <img className="w-full" src="./img/gitar.png" alt="new product" />
                </div>
                <div className="py-3">
                  <span className="font-medium text-sm text-[#DEDEDE]">Акустические гитары</span>
                  <h3 className="font-semibold text-sm sm:text-base">LC-3400</h3>
                  <span className="font-bold text-base sm:text-lg">11 360 ₽</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tavar