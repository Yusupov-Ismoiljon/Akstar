import React, { useState } from 'react'

const Tavar = () => {

  return (
    <section className="bg-[#1B37A3] py-7">
      <div className="w-full max-w-[1300px] mx-auto px-5">
        <div className='flex items-center justify-between'>
          <div>
            <div className="lg:mb-0 mb-5 text-white">
              <h2 data-aos="fade-right" className="font-bold md:text-3xl text-xl mb-[30px] block aos-init aos-animate">Поступление новых товаров</h2>
            </div>
            <div>
              <p data-aos="fade-right" className='font-bold text-xl text-white aos-init aos-animate'>Новое изделие поступит на завод в течение 1 месяца.</p>
              <p data-aos="fade-right" className='font-bold text-xl text-white aos-init aos-animate'>Мы продаем ткань</p>
            </div>
          </div>
          <img data-aos="fade-left" className='w-[500px] h-[400px] rounded-xl aos-init aos-animate' src="./img/erkak12.jpeg" alt="" />
        </div>
      </div>
      <div>
      </div>
    </section>
  )
}

export default Tavar