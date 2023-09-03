import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Hero = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <div className='-z-30 bg-black mb-4'>
                <div className='w-full max-w-[1920px] mx-auto px-5'>
                    <marquee>
                        <div className='font-raleway text-white space-x-9 py-2'>
                            <span className='text-base leading-normal uppercase'>Промокод <span className='font-extrabold'>CROW</span>- скидка 25% на все курсы гитарной академии</span>
                            <span className='text-base leading-normal uppercase'>Промокод <span className='font-extrabold'>CROW</span>- скидка 25% на все курсы гитарной академии</span>
                            <span className='text-base leading-normal uppercase'>Промокод <span className='font-extrabold'>CROW</span>- скидка 25% на все курсы гитарной академии</span>
                            <span className='text-base leading-normal uppercase'>Промокод <span className='font-extrabold'>CROW</span>- скидка 25% на все курсы гитарной академии</span>
                        </div>
                    </marquee>
                </div>
            </div>
            <div className='w-full max-w-[1920px] mx-auto px-5'>
                <div>
                    <div className='hidden md:grid grid-cols-3 items-stretch py-8 gap-5'>
                        <img data-aos="zoom-in" className='col-span-1 rounded-3xl overflow-hidden aos-init aos-animate' src="./img/gitara.png" alt="" />
                        <img data-aos="zoom-in" className='col-span-2 rounded-3xl overflow-hidden row-span-2 aos-init aos-animate' src="./img/gitara.png" alt="" />
                        <img data-aos="zoom-in" className='col-span-1 rounded-3xl overflow-hidden aos-init aos-animate' src="./img/gitara.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='bg-[#1b37a31a] mb-8'>
                <div className='w-full max-w-[1920px] mx-auto text-center px-5 py-2.5'>
                    <span className='font-semibold text-base leading-normal mr-2'>TELEGRAM-КАНАЛ МУЗЫКАЛЬНОГО СООБЩЕСТВА AKSTAR</span>
                    <i className={`fa-brands fa-telegram`}></i>
                </div>
            </div>
        </>
    )
}

export default Hero;