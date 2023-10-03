import React, { useEffect, useState } from 'react';
import { api3 } from '../../public/data';
import { tapArr } from '../../public/data';
import MySwiperBola from '../layouts/SwiperBola';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useParams } from 'react-router-dom';


const KitsData = ({ addCart2, addLike2, removeLike2 }) => {
    const [tab, setTab] = useState(1);
    const setActiveTab = (id) => {
        setTab(id)
    };

    const [tabImg, setTabImg] = useState(4);
    const setActiveTabImg = (id) => {
        setTabImg(id)
    };

    const { id } = useParams();
    const e = api3.find(i => i.id === parseInt(id));
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div className='w-full max-w-[1300px] mx-auto px-10 py-10 mb-16'>
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
                            {e.tab.map((e) => {
                                return (
                                    <div key={e.id} className={`w-full ${tabImg === e.id ? 'block' : 'hidden'}`}>
                                        <img className='w-[520px] h-[520px]' src={e.img} alt="" />
                                    </div>
                                )
                            })}

                        </div>
                        <div className='md:hidden block'>
                            <div className='grid grid-cols-4 md:grid-cols-1 gap-7'>
                                {e.tab.map((e) => {
                                    return (
                                        <button key={e.id} onClick={() => setActiveTabImg(e.id)}>
                                            <img className={`md:w-28 md:h-28 w-[70px] h-[70px] ${e.tab === e.id ? 'border-2 border-[#1B37A3] rounded duration-500' : 'border-transparent'}`} src={e.img} aria-hidden='false' />
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className='space-y-7'>
                        <div>
                            <h2 className='font-bold text-[28px] leading-9 md:text-4xl md:leading-normal mb-4'>{e.lc}</h2>
                            <span className='font-bold text-sm text-[#9ACC6C]'>В наличии (4)</span>
                        </div>
                        <p className='font-normal text-base leading-normal'>Фолк гитара с металлическими струнами, верхняя дека - ель, корпус - агатис, цвет натуральный, 39", с вырезом</p>
                        <div className='space-y-4'>
                            <h3 className='font-bold text-lg leading-normal brend'>Описание</h3>
                            <p className='font-normal text-base leading-6'>Акустическая гитара в корпусе джамбо, с очень мощным звуком и в то же время очень удобная.Инструмент огромных размеров, с эстетикой и звуковой концепцией, которая удивляет с первой секунды.Это одна из самых популярных акустических гитар, обеспечивающая насыщенное звучание с...</p>
                            <p className='font-semibold text-sm leading-normal logo'>Подробнее</p>
                        </div>
                        <p className='font-extrabold text-4xl leading-normal'>11 360 ₽</p>
                        <button onClick={() => addCart2(e.id)} className='w-[240px] font-semibold text-lg leading-6 text-white bg-[#1B37A3] rounded-lg py-4'>
                            {e.karzinka}
                        </button>
                    </div>
                </div>


                {/* text-tab */}
                <div>
                    <div className="md:flex md:justify-between md:w-[636px] bg-slate-300 py-2 px-5 rounded-xl">
                        {tapArr.map((el) => {
                            return (
                                <div key={el.id}>
                                    <button className={`px-6 py-2.5 rounded-lg ${tab === el.id ? 'duration-700 bg-[#F7F7FC] logo' : 'border-transparent'} font-bold text-xl leading-7`} onClick={() => setActiveTab(el.id)}>
                                        {el.title}
                                    </button>
                                </div>
                            );
                        })}
                    </div>

                    <div className='p-7 bg-[#F7F7FC]'>
                        <div>
                            {tapArr.map((e) => {
                                return (
                                    <div key={e.id} className={`w-full ${tab === e.id ? 'block' : 'hidden'}`}>
                                        <p>{e.content}</p>
                                        <div className={`grid md:grid-cols-2 grid-cols-1 ${e.id === 2 ? "block" : "hidden"}`}>
                                            <ul key={e.id} className='space-y-4'>
                                                <li className='grid md:grid-cols-2 grid-cols-1 font-medium text-base leading-6 text-[#89898E] md:space-x-4'>
                                                    <span>Производитель:</span>
                                                    <span className='text-[#262626]'>Alhambra</span>
                                                </li>
                                                <li className='grid md:grid-cols-2 grid-cols-1 font-medium text-base leading-6 text-[#89898E] md:space-x-4'>
                                                    <span>Количество струн:</span>
                                                    <span className='text-[#262626]'>6</span>
                                                </li>
                                                <li className='grid md:grid-cols-2 grid-cols-1 font-medium text-base leading-6 text-[#89898E] md:space-x-4'>
                                                    <span>Цвет:</span>
                                                    <span className='text-[#262626]'>Натуральный</span>
                                                </li>
                                                <li className='grid md:grid-cols-2 grid-cols-1 font-medium text-base leading-6 text-[#89898E] md:space-x-4'>
                                                    <span>Артикул:</span>
                                                    <span className='text-[#262626]'>1.122</span>
                                                </li>
                                                <li className='grid md:grid-cols-2 grid-cols-1 font-medium text-base leading-6 text-[#89898E] md:space-x-4'>
                                                    <span>Базовая единица:</span>
                                                    <span className='text-[#262626]'>шт</span>
                                                </li>
                                                <li className='grid md:grid-cols-2 grid-cols-1 font-medium text-base leading-6 text-[#89898E] md:space-x-4'>
                                                    <span>Ставки налогов:</span>
                                                    <span className='text-[#262626]'>Ставки налогов:</span>
                                                </li>
                                                <li className='grid md:grid-cols-2 grid-cols-1 font-medium text-base leading-6 text-[#89898E] md:space-x-4'>
                                                    <span>Верхняя дека:</span>
                                                    <span className='text-[#262626]'>Массив ели</span>
                                                </li>
                                                <li className='grid md:grid-cols-2 grid-cols-1 font-medium text-base leading-6 text-[#89898E] md:space-x-4'>
                                                    <span>Звукосниматель:</span>
                                                    <span className='text-[#262626]'>Есть</span>
                                                </li>
                                                <li className='grid md:grid-cols-2 grid-cols-1 font-medium text-base leading-6 text-[#89898E] md:space-x-4'>
                                                    <span>Вес нетто (кг):</span>
                                                    <span className='text-[#262626]'>2.9</span>
                                                </li>
                                            </ul>
                                            <ul className='space-y-4'>
                                                <li className='grid md:grid-cols-2 grid-cols-1 font-medium text-base leading-6 text-[#89898E] md:space-x-4'>
                                                    <span>Вес брутто (кг):</span>
                                                    <span className='text-[#262626]'>4.1</span>
                                                </li>
                                                <li className='grid md:grid-cols-2 grid-cols-1 font-medium text-base leading-6 text-[#89898E] md:space-x-4'>
                                                    <span>Объем (м3):</span>
                                                    <span className='text-[#262626]'>0.0968</span>
                                                </li>
                                                <li className='grid md:grid-cols-2 grid-cols-1 font-medium text-base leading-6 text-[#89898E] md:space-x-4'>
                                                    <span>Анкер:</span>
                                                    <span className='text-[#262626]'>Есть</span>
                                                </li>
                                                <li className='grid md:grid-cols-2 grid-cols-1 font-medium text-base leading-6 text-[#89898E] md:space-x-4'>
                                                    <span>УПАКдлина (см):</span>
                                                    <span className='text-[#262626]'>122</span>
                                                </li>
                                                <li className='grid md:grid-cols-2 grid-cols-1 font-medium text-base leading-6 text-[#89898E] md:space-x-4'>
                                                    <span>УПАКдлина (см):</span>
                                                    <span className='text-[#262626]'>48</span>
                                                </li>
                                                <li className='grid md:grid-cols-2 grid-cols-1 font-medium text-base leading-6 text-[#89898E] md:space-x-4'>
                                                    <span>УПАКдлина (см):</span>
                                                    <span className='text-[#262626]'>18</span>
                                                </li>
                                                <li className='grid md:grid-cols-2 grid-cols-1 font-medium text-base leading-6 text-[#89898E] md:space-x-4'>
                                                    <span>Чехол/кейс:</span>
                                                    <span className='text-[#262626]'>Чехол</span>
                                                </li>
                                                <li className='grid md:grid-cols-2 grid-cols-1 font-medium text-base leading-6 text-[#89898E] md:space-x-4'>
                                                    <span>Ширина грифа:</span>
                                                    <span className='text-[#262626]'>43мм</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className={` ${e.id === 3 ? 'block' : 'hidden'}`}>
                                            <div className='space-y-4'>
                                                <p className='font-medium text-base leading-6'>Мы стараемся сохранять цены на товары для клиентов максимально доступными, поэтому доставка оплачивается клиентом ПРИ ПОЛУЧЕНИИ, чтобы всё было максимально прозрачно и мы могли сохранить максимально выгодную стоимость товаров для наших клиентов. Доставка осуществляется службами СДЭК или Почта России и оформляется страховка на весь заказ.</p>
                                                <p className='font-medium text-base leading-6'><span className='font-bold'>Срок доставки:</span> 3-5 рабочих дней с момента отправки заказа.</p>
                                                <p className='font-bold text-base leading-6'>Гитары:</p>
                                                <p className='font-medium text-base leading-6'>Москва: 1090-1200 рублей за 1 ед. товара</p>
                                                <p className='font-medium text-base leading-6'>Санкт-Петербург: 700-1000 рублей за 1 ед. товара (либо САМОВЫВОЗ из пункта выдачи)</p>
                                                <p className='font-medium text-base leading-6'>Сочи: 880-1100 рублей за 1 ед. товара</p>
                                                <p className='font-medium text-base leading-6'>Казань: 650-1025 рублей за 1 ед. товара</p>
                                                <p className='font-medium text-base leading-6'>Новосибирск: 1350-1765 рублей</p>
                                                <p className='font-bold text-base leading-6'>Итоговая стоимость доставки будет известна тогда, когда заказ прибудет к вам<div className=""></div></p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full max-w-[1300px] mx-auto px-10 mb-14'>
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mySwiper"
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {api3.map((e) => (
                        <SwiperSlide key={e.id}>
                            <MySwiperBola addCart2={addCart2} addLike2={addLike2} removeLike2={removeLike2} e={e} />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    )
}

export default KitsData