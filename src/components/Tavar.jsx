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
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              <li data-aos-delay="0" data-aos="fade-up" className="text-white relative aos-init aos-animate">
                <div>
                  <img className="w-full h-64 rounded-lg" src="./img/erkak1.jpeg" alt="new product" />
                </div>
                <div className="py-3">
                  <h3 className="font-bold text-sm sm:text-base">Мужская футболка Street Style</h3>
                  <span className="font-extrabold text-base sm:text-lg">711₽</span>
                </div>
              </li>
              <li data-aos-delay="300" data-aos="fade-up" className="text-white relative aos-init aos-animate">
                <div>
                  <img className="w-full h-64 rounded-lg" src="./img/ayolar3.jpg" alt="new product" />
                </div>
                <div className="py-3">
                  <h3 className="font-semibold text-sm sm:text-base">Куртка Anaki черная 2091 женская</h3>
                  <span className="font-bold text-base sm:text-lg">609 ₽</span>
                </div>
              </li>
              <li data-aos-delay="600" data-aos="fade-up" className="text-white relative aos-init aos-animate">
                <div>
                  <img className="w-full h-64 rounded-lg" src="./img/bola1.jpg" alt="new product" />
                </div>
                <div className="py-3">
                  <h3 className="font-semibold text-sm sm:text-base">Джинсы для мальчиков, Rumino Jeans</h3>
                  <span className="font-bold text-base sm:text-lg">517 ₽</span>
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