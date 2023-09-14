import React from 'react';


const Hero = () => {

    return (
        <>
            <div className='w-full max-w-[1540px] mx-auto px-5'>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-5 justify-center items-center py-8 gap-7'>
                        <div className='w-full hidden md:flex flex-col gap-7 col-span-2'>
                            <img className='h-[200px] rounded-xl' src="../img/gitara.png" alt="" aria-hidden='true' />
                            <img className='h-[200px] rounded-xl' src="../img/gitara.png" alt="" aria-hidden='true' />
                        </div>
                        <img className='w-full md:h-[430px] col-span-3 rounded-3xl' src="../img/gitara.png" alt="" aria-hidden='true' />
                    </div>
                </div>
            </div>
            <div className='bg-[#1b37a31a] mb-8'>
                <div className='w-full max-w-[1540px] mx-auto text-center px-5 py-2.5'>
                    <span className='font-semibold text-base leading-normal mr-2'>TELEGRAM-КАНАЛ МУЗЫКАЛЬНОГО СООБЩЕСТВА AKSTAR</span>
                    <i className={`fa-brands fa-telegram`}></i>
                </div>
            </div>
        </>
    )
}

export default Hero;