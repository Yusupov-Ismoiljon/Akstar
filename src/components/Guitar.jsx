import React, { useEffect, useState } from 'react';
import { api } from '../../public/data';
import { tapArr } from '../../public/data';
import 'swiper/css';
import { useParams } from 'react-router-dom';


const Guitar = ({ addCart }) => {
    const [tab, setTab] = useState(1);
    const setActiveTab = (id) => {
        setTab(id)
    };
    const [tabImg, setTabImg] = useState(4);
    const setActiveTabImg = (id) => {
        setTabImg(id)
    };

    const { id } = useParams();
    const e = api.find(i => i.id === parseInt(id));
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div className='w-full max-w-[1300px] mx-auto px-5 py-10 mb-16'>
                {/* img-tab */}
                <div className={`grid xl:grid-cols-2 grid-cols-1 gap-7 mb-16`}>
                    <div className='md:flex md:items-center md:justify-between'>
                        <div className='md:block hidden'>
                            <div className='md:w-28 grid grid-cols-4 md:grid-cols-1 gap-7 mr-5'>
                                {e.tab.map((e) => {
                                    return (
                                        <button key={e.id} onClick={() => setActiveTabImg(e.id)}>
                                            <img className={`md:w-28 md:h-28 w-[70px] h-[70px] rounded-lg ${e.tab === e.id ? 'border-2 border-[#1B37A3] rounded duration-500' : 'border-transparent'}`} src={e.img} aria-hidden='false' />
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='md:mb-0 mb-5'>
                            {
                                e.tab.map((i) => {
                                    return (
                                        <div key={i.id} className={`w-full ${tabImg === i.id ? 'block' : 'hidden'}`}>
                                            <img className='w-[520px] h-[520px]' src={i.img} alt="" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='md:hidden block'>
                            <ul className='grid grid-cols-4 md:grid-cols-1 md:gap-7 gap-5'>
                                {e.tab.map((e) => {
                                    return (
                                        <li key={e.id} onClick={() => setActiveTabImg(e.id)}>
                                            <img className={`md:w-28 md:h-28 w-full h-40`} src={e.img} aria-hidden='false' />
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>

                    <div className='space-y-7'>
                        <div>
                            <h2 className='font-bold text-[28px] leading-9 md:text-4xl md:leading-normal mb-4'>{e.lc}</h2>
                            <span className='font-bold text-sm text-[#9ACC6C]'>В наличии (4)</span>
                        </div>
                        <p className='font-normal text-base leading-normal'>{e.text}</p>
                        <div className='space-y-4'>
                            <h3 className='font-bold text-lg leading-normal brend'>Описание</h3>
                            <p className='font-normal text-base leading-6'>Акустическая гитара в корпусе джамбо, с очень мощным звуком и в то же время очень удобная.Инструмент огромных размеров, с эстетикой и звуковой концепцией, которая удивляет с первой секунды.Это одна из самых популярных акустических гитар, обеспечивающая насыщенное звучание с...</p>
                            <p className='font-semibold text-sm leading-normal logo'>Подробнее</p>
                        </div>
                        <p className='font-extrabold text-4xl leading-normal'>11 360 ₽</p>
                        <button onClick={() => addCart(e.id)} className='w-[240px] font-semibold text-lg leading-6 text-white bg-[#1B37A3] rounded-lg py-4'>
                            {e.karzinka}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Guitar