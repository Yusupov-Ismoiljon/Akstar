import React from 'react'

const Cta = () => {
  return (
    // CTA
    <div className='bg-[#008DFF] text-[#008DFF] text-center py-10'>
      <div className='w-full max-w-[1300px] mx-auto px-5 bg-white rounded-2xl'>
        <div className='py-7'>
          <h2 className='font-bold md:text-4xl text-3xl leading-6 mb-10'>Свяжитесь с нами сейчас и получите <span>скидки</span></h2>

          <div className='flex text-center justify-center items-center gap-5 mx-auto'>
            <a className='flex justify-center text-center items-center md:border-2 md:border-[#008DFF] md:rounded-lg md:py-3 md:px-10' target='_blank' href="https://t.me/IsmoiljonFD"><i class="fa-brands fa-telegram md:fa-lg fa-2xl mr-2"></i><span className='md:block hidden'>Телеграмма</span></a>
            <a className='flex justify-center text-center items-center md:border-2 md:border-[#008DFF] md:rounded-lg md:py-3 md:px-10' href="tel:+998932598079"><i class="fa-solid fa-square-phone md:fa-lg fa-2xl mr-2"></i><span  className='md:block hidden'>Telefon</span></a>
            <a className='flex justify-center text-center items-center md:border-2 md:border-[#008DFF] md:rounded-lg md:py-3 md:px-10' target='_blank' href="https://mail.google.com/mail/u/0/#inbox"><i class="fa-solid fa-envelope md:fa-lg fa-2xl mr-2"></i><span  className='md:block hidden'>Электронная почта</span></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cta