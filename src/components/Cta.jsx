import React from 'react'

const Cta = () => {
  return (
    // CTA
    <div className='bg-[#008DFF] text-[#008DFF] text-center py-10'>
      <div className='w-full max-w-[1300px] mx-auto px-5 bg-white rounded-2xl'>
        <div className='py-7'>
          <h2 className='font-bold text-4xl leading-6 mb-10'>Свяжитесь с нами сейчас и получите <span>скидки</span></h2>

          <div className='flex justify-center items-center gap-5'>
            <a className='inline-block border-2 border-[#008DFF] py-3 px-10 rounded-xl' target='_blank' href="https://t.me/IsmoiljonFD"><i class="fa-brands fa-telegram fa-lg mr-2"></i>Телеграмма</a>
            <a className='inline-block border-2 border-[#008DFF] py-3 px-10 rounded-xl' href="tel:+998932598079"><i class="fa-solid fa-square-phone fa-lg mr-2"></i>Telefon</a>
            <a className='inline-block border-2 border-[#008DFF] py-3 px-10 rounded-xl' target='_blank' href="https://mail.google.com/mail/u/0/#inbox"><i class="fa-solid fa-envelope fa-lg mr-2"></i>Электронная почта</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cta