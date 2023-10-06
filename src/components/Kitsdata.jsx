import React, { useEffect, useState } from 'react';
import { api3 } from '../../public/data';
import { useParams } from 'react-router-dom';


const KitsData = ({ addCart2 }) => {
    const [hidden, setHidden] = useState(false)
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
            <div className='w-full max-w-[1300px] mx-auto px-5 py-10 mb-16'>
                {/* img-tab */}
                <div className={`grid xl:grid-cols-2 grid-cols-1 gap-7 mb-16`}>
                    <div className='md:flex md:justify-between'>
                        <div className='md:block hidden'>
                            <div className='md:w-28 grid grid-cols-4 md:grid-cols-1 gap-7 mr-5'>
                                {e.tab.map((e) => {
                                    return (
                                        <button key={e.id} onClick={() => setActiveTabImg(e.id)}>
                                            <img style={{ objectFit: 'cover', objectPosition: 'top' }} className={`md:w-28 md:h-28 w-[70px] h-[70px] rounded-lg ${e.tab === e.id ? 'border-2 border-[#1B37A3] rounded duration-500' : 'border-transparent'}`} src={e.img} aria-hidden='false' />
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='md:mb-0 mb-5'>
                            {e.tab.map((e) => {
                                return (
                                    <div key={e.id} className={`w-full ${tabImg === e.id ? 'block' : 'hidden'}`}>
                                        <img style={{ objectFit: 'cover', objectPosition: 'top' }} className='w-[520px] h-[520px]' src={e.img} aria-hidden="false"/>
                                    </div>
                                )
                            })}

                        </div>
                        <div className='md:hidden block'>
                            <div className='grid grid-cols-4 md:grid-cols-1 gap-7'>
                                {e.tab.map((e) => {
                                    return (
                                        <button key={e.id} onClick={() => setActiveTabImg(e.id)}>
                                            <img style={{ objectFit: 'cover', objectPosition: 'top' }} className={`md:w-28 md:h-28 w-[70px] h-[70px] ${e.tab === e.id ? 'border-2 border-[#1B37A3] rounded duration-500' : 'border-transparent'}`} src={e.img} aria-hidden='false' />
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
                        <p className='font-normal text-base leading-normal'>Коллекция произведений искусства детской одежды. девятнадцать Описание: Предлагаемая нами продукция изготовлена ​​из трикотажного полотна, важным преимуществом которого является высокая эластичность. Это преимущество обеспечивает комфорт и удобство во время использования. Коллекция состоит из топов и низов, сочетающих один стиль и цвет. Линия: Шорты Футболки Трикотажные костюмы Платья Комплекты и многое другое.</p>
                        <div className='space-y-4'>
                            <h3 className='font-bold text-lg leading-normal brend'>Описание</h3>
                            <p className='font-normal text-base leading-6'> О компании: Наша компания предлагает широкий ассортимент трикотажных изделий. Благодаря качественному материалу, соответствующему мировым стандартам качества, срок службы длительный и надежный. Большой выбор увеличивает шансы найти нужный товар.</p>
                            <button onClick={() => setHidden(!hidden)} className='font-semibold text-sm leading-normal logo'>Подробнее</button>
                            {hidden &&
                                <p className='font-normal text-base leading-6'>{e.text}</p>
                            }
                        </div>
                        <p className='font-extrabold text-4xl leading-normal'>11 360 ₽</p>
                        <button onClick={() => addCart2(e.id)} className='w-[240px] font-semibold text-lg leading-6 text-white bg-[#1B37A3] rounded-lg py-4'>
                            {e.karzinka}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KitsData