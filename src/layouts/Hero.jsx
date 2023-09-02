import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Hero = () => {

    return (
        <>
            <div className='w-full max-w-[1920px] mx-auto px-5'>
                <div className='-z-30 bg-black mb-4'>
                    <marquee>
                        <div className='font-raleway text-white space-x-9 py-2'>
                            <span className='text-base leading-normal uppercase'>Промокод <span className='font-extrabold'>CROW</span>- скидка 25% на все курсы гитарной академии</span>
                            <span className='text-base leading-normal uppercase'>Промокод <span className='font-extrabold'>CROW</span>- скидка 25% на все курсы гитарной академии</span>
                            <span className='text-base leading-normal uppercase'>Промокод <span className='font-extrabold'>CROW</span>- скидка 25% на все курсы гитарной академии</span>
                            <span className='text-base leading-normal uppercase'>Промокод <span className='font-extrabold'>CROW</span>- скидка 25% на все курсы гитарной академии</span>
                        </div>
                    </marquee>
                </div>
                <div>
                    <div className='hidden md:grid grid-cols-3 items-stretch py-8 gap-5'>
                        <img data-aos="zoom-in" className='col-span-1 rounded-3xl overflow-hidden' src="./img/gitara.png" alt="" />
                        <img data-aos="zoom-in" className='col-span-2 rounded-3xl overflow-hidden row-span-2' src="./img/gitara.png" alt="" />
                        <img data-aos="zoom-in" className='col-span-1 rounded-3xl overflow-hidden' src="./img/gitara.png" alt="" />
                    </div>
                </div>
                <div>
                    <span className='font-semibold text-base leading-normal brend'>TELEGRAM-КАНАЛ МУЗЫКАЛЬНОГО СООБЩЕСТВА AKSTAR</span>
                </div>
            </div>
        </>
    )
}

export default Hero;