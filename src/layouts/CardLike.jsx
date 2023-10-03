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
          <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {like.map((e) => {
              return (
                <li key={e.id} data-aos-delay="100" data-aos="fade-right" className='flex flex-col show aos-init aos-animate relative rounded-md'>
                  <div className='relative grow'>
                    <img className='w-[328px] h-[238px] rounded-md brightness-90 mb-3' src={e.img} alt="product img" />
                    {/* delete */}
                    <button className='flex items-center absolute top-2 right-2 hover:text-red-500 duration-500' onClick={() => removeLike(e.id)}>
                      <i className="fa-solid fa-trash-can ml-2"></i>
                    </button>
                  </div>

                  <div className='p-3'>
                    <p className='font-bold text-base text-[#111] leading-normal mb-1'>{e.lc}</p>
                    <p className='font-bold text-xl logo leading-normal mb-3'>{e.pul} ₽</p>
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