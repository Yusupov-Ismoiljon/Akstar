import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const CardLike = ({ shop, like, removeLike }) => {
  return (
    <div>
      <div className='w-full max-w-[1300px] mx-auto px-10 py-10'>
        <h1 className='font-bold text-4xl leading-normal mb-7'>Любимые</h1>
        <div>
          <div className={`flex justify-center items-center w-full ${like.length === 0 ? 'block' : 'hidden'}`}>
            <img src="./img/gif.gif" alt="" />
          </div>
          <ul className='space-y-10'>
            {like.map((e) => {
              return (
                <li key={e.id} data-aos-delay="100" data-aos="fade-right" className='aos-init aos-animate relative'>
                  <div className='md:flex md:justify-between gap-y-5'>
                    <div className='md:flex gap-5'>
                      <img className='w-[250px] h-[300px] rounded-md mb-5 md:mb-0' src={e.img} alt="product img" />
                      <div>
                        <p className='font-bold text-2xl leading-normal mb-5'>{e.lc}</p>
                        <p className='font-normal text-base leading-normal'>Фолк гитара с металлическими струнами, верхняя дека - ель, <br /> корпус - агатис, цвет натуральный, 39", с вырезом</p>
                      </div>
                    </div>

                    <div className='hidden lg:block'>
                      <p className='font-bold text-3xl logo leading-normal mb-10'>{e.pul} ₽</p>
                      <button className='flex items-center absolute bottom-0 hover:text-red-500 duration-500' onClick={() => removeLike(e.id)}>
                        <span className='leading-normal'>
                          Удалить
                        </span>
                          <i className="fa-solid fa-trash-can ml-2"></i>
                      </button>
                    </div>
                  </div>
                  <div className='flex justify-between block lg:hidden mt-5 md:mt-0'>
                    <p className='font-bold text-3xl logo leading-normal'>{e.pul} ₽</p>
                    <button className='text-[#B0B0B0] my-auto' onClick={() => removeLike(e.id)}>
                      <span className='leading-normal'>
                        Удалить
                        <i className="fa-solid fa-trash-can ml-2"></i>
                      </span>
                    </button>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CardLike