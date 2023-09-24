import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'

import { api } from '../data';
import { Link } from 'react-router-dom';

export default function MySwiper({addCart, addCart1, addLike}) {
    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper"
            >
                <div>
                    {api.map((e) => {
                        return (
                            <SwiperSlide key={e.id} className='flex flex-col'>
                                <button onClick={()=> addLike(e.id)} className='absolute top-3 right-3 z-30'>
                                    <i className={`fa-regular fa-heart fa-xl text-[#B0B0B0]`}></i>
                                </button>
                                <Link to={`/guitar/${e.id}`}>
                                    <button onClick={()=> addCart1(e.id)} className="bg-white rounded-xl py-4">
                                        <img className="w-full" src={e.img} alt="new product" />
                                    </button>
                                </Link>
                                <div className="py-3 space-y-1">
                                    <span className="font-medium text-sm text-[#DEDEDE]">{e.ak}</span>
                                    <h3 className="font-bold text-sm sm:text-base brend">{e.lc}</h3>
                                    <span className="font-extrabold text-base sm:text-lg logo">{e.pul}</span>
                                </div>
                                <button onClick={() => addCart(e.id)} className='font-semibold text-base leading-6 text-[#1B37A3] py-1 px-9 border-2 border-[#1B37A3] rounded-md'>
                                    {e.karzinka}
                                </button>
                            </SwiperSlide>
                        )
                    })

                    }
                </div>
            </Swiper>
        </>
    );
}
