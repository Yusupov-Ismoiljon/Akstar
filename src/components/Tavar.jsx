import React, { useState } from 'react'

const Tavar = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <section className="bg-[#1B37A3] py-7">
      <div className="w-full max-w-[1300px] mx-auto px-5">
        <div className="lg:flex justify-between gap-y-8 items-center">
          <div className="lg:mb-0 mb-5 text-white">
            <h2 data-aos="fade-right" className="font-bold md:text-5xl text-2xl mb-[30px] block aos-init aos-animate">Поступление новых товаров</h2>
            <button data-aos="fade-up" className="bg-white text-black rounded-[10px] text-lg font-semibold md:py-4 md:px-9 py-2 px-5 aos-init aos-animate">Перейти в каталог</button>
          </div>
          <div>
            <p className='font-bold text-3xl text-white'>Новое изделие поступит на завод в течение 1 месяца.</p>
            <p className='font-bold text-3xl text-white'>Мы продаем ткань</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tavar