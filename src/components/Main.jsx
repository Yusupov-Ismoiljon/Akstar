import { Checkbox, Option, Select } from '@material-tailwind/react';
import React, { useState } from 'react'
import Header from './Header';
import { Link } from 'react-router-dom';

const Main = ({ shop, setShop }) => {
    const [menuKatal, setMenuKatal] = useState(false);
    const [sozlash, setSozlash] = useState(false);
    const [love, setLove] = useState(false);
    return (
        <main className='pt-7 pb-14'>
            <div className='w-full max-w-[1540px] mx-auto px-5'>
                <div>
                    <ul className='flex items-center space-x-1 mb-[30px]'>
                        <li className='flex items-center'>
                            <a className='font-normal text-xs leading-normal logo mr-1' href="#">Каталог</a>
                            <img className='w-4 h-4' src="./img/chevron.svg" alt="" aria-hidden='true' />
                        </li>
                        <li className='flex items-center'>
                            <a className='font-normal text-xs leading-normal logo mr-1' href="#">Струнные</a>
                            <img className='w-4 h-4' src="./img/chevron.svg" alt="" aria-hidden='true' />
                        </li>
                        <li className='flex items-center'>
                            <a className='font-normal text-xs leading-normal logo mr-1' href="#">Гитары</a>
                            <img className='w-4 h-4' src="./img/chevron.svg" alt="" aria-hidden='true' />
                        </li>
                        <li className='flex items-center'>
                            <a className='font-normal text-xs leading-normal icon' href="#">Акустические гитары</a>
                        </li>
                    </ul>
                    <div className='relative mb-6'>
                        <button data-aos="fade-right" onClick={() => setMenuKatal(!menuKatal)} className='flex items-center aos-init aos-animate'>
                            <img className='mr-4' src="./img/menu-sort.svg" alt="" aria-hidden='true' />
                            <span className='font-bold text-4xl brend'>Каталог</span>
                        </button>
                        {menuKatal &&
                            <div className='md:w-[360px] bg-white absolute shadov rounded-lg p-[30px] -top-[30px] z-40'>
                                <button onClick={() => setMenuKatal(!menuKatal)} className='flex items-center mb-[30px]'>
                                    <img className='mr-4' src="./img/x.svg" alt="" aria-hidden='true' />
                                    <span className='font-bold text-4xl brend'>Каталог</span>
                                </button>
                                <ul className='space-y-5'>
                                    <li>
                                        <a className='font-normal text-lg leading-normal' href="#">Акустические гитары</a>
                                    </li>
                                    <li>
                                        <a className='font-normal text-lg leading-normal' href="#">Электроакустические гитары</a>
                                    </li>
                                    <li>
                                        <a className='font-normal text-lg leading-normal' href="#">Классические гитары</a>
                                    </li>
                                    <li>
                                        <a className='font-normal text-lg leading-normal' href="#">Укулеле</a>
                                    </li>
                                    <li>
                                        <a className='font-normal text-lg leading-normal' href="#">Гитарное усиление</a>
                                    </li>
                                    <li>
                                        <a className='font-normal text-lg leading-normal' href="#">Струны</a>
                                    </li>
                                    <li>
                                        <a className='font-normal text-lg leading-normal' href="#">Полуакустические гитары</a>
                                    </li>
                                    <li>
                                        <a className='font-normal text-lg leading-normal' href="#">Аксессуары для гитары</a>
                                    </li>
                                    <li>
                                        <a className='font-normal text-lg leading-normal' href="#">Гитарные комплектующие</a>
                                    </li>
                                    <li>
                                        <a className='font-normal text-lg leading-normal' href="#">Щипковые инструменты</a>
                                    </li>
                                    <li>
                                        <a className='font-normal text-lg leading-normal' href="#">Бас-гитары</a>
                                    </li>
                                    <li>
                                        <a className='font-normal text-lg leading-normal' href="#">Электрогитары</a>
                                    </li>
                                </ul>
                            </div>
                        }
                    </div>
                    <div className='mb-4'>
                        <div className='flex items-center justify-between py-6 border-b-2 border-[#191919]'>
                            <button onClick={() => setSozlash(!sozlash)} className='flex items-center'>
                                <img className='w-6 mr-2.5' src="./img/sozlash.svg" alt="" />
                                <span className='font-bold text-base brend'>Фильтр</span>
                            </button>
                            <div>
                                <Select label='По популярности'>
                                    <Option>По популярности</Option>
                                    <Option>Сначала дорогие</Option>
                                    <Option>Сначала дешёвые</Option>
                                </Select>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row space-x-7'>
                        {/* sozlash menu */}
                        {sozlash &&
                            <div>
                                <div className='w-[300px] space-y-[30px]'>
                                    <div className='space-y-4'>
                                        <span className='fo nt-bold text-lg leading-normal block brend'>Разедл</span>
                                        <ul>
                                            <li>
                                                <Checkbox id="гитары" label="Гитары" color="blue" vripple={false} />
                                            </li>
                                            <li>
                                                <Checkbox id="таб" label="Табы" color="blue" vripple={false} />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='space-y-4'>
                                        <span className='fo nt-bold text-lg leading-normal block brend'>Тип</span>
                                        <ul>
                                            <li>
                                                <Checkbox id="аку" label="Акустические гитары" color="blue" vripple={false} />
                                            </li>
                                            <li>
                                                <Checkbox id="зле" label="Электрогитары" color="blue" vripple={false} />
                                            </li>
                                            <li>
                                                <Checkbox id="уси" label="Усилители для гитар" color="blue" vripple={false} />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='space-y-4'>
                                        <span className='fo nt-bold text-lg leading-normal block brend'>Цена</span>
                                        <div className='flex items-center space-x-2.5'>
                                            <input
                                                className='flex justify-center items-center w-[112px] border-2 border-black rounded-lg py-1 px-2.5'
                                                type="number"
                                            />
                                            <i className="fa-solid fa-minus brend fa-2xl"></i>
                                            <input
                                                className='flex justify-center items-center w-[112px] border-2 border-black rounded-lg py-1 px-2.5'
                                                type="number"
                                            />
                                            <span className='font-semibold text-lg leading-normal'>₽</span>
                                        </div>
                                    </div>
                                    <div className='space-y-4'>
                                        <span className='fo nt-bold text-lg leading-normal block brend'>Тип</span>
                                        <ul>
                                            <li>
                                                <Checkbox id="cort" label="Cort" color="blue" vripple={false} />
                                            </li>
                                            <li>
                                                <Checkbox id="ortega" label="Ortega" color="blue" vripple={false} />
                                            </li>
                                            <li>
                                                <Checkbox id="kremona" label="Kremona" color="blue" vripple={false} />
                                            </li>
                                        </ul>
                                    </div>
                                    <button className='w-full font-semibold text-base leading-6 text-white rounded-xl py-3 px-9 bg-[#1B37A3]'>Применить фильтр</button>
                                </div>
                            </div>
                        }
                        <ul className='grid md:grid-cols-5 p-5'>
                            <li data-aos-delay="100" data-aos="fade-up" className="text-white relative aos-init aos-animate">
                                <button onClick={() => setLove(!love)} className='absolute top-3 right-3 z-30'>
                                    <i className={`fa-regular fa-heart fa-xl ${!love ? `fa-sharp text-[#B0B0B0]` : `fas text-[#1B37A3]`}`}></i>
                                </button>
                                <Link to={`/guitar`}>
                                    <div className="bg-white rounded-xl py-4">
                                        <img className="w-full" src='./img/gitar.png' alt="new product" />
                                    </div>
                                </Link>
                                <div className="py-3 space-y-1">
                                    <span className="font-medium text-sm text-[#DEDEDE]">Акустические гитары</span>
                                    <h3 className="font-bold text-sm sm:text-base brend">lc-3400</h3>
                                    <span className="font-extrabold text-base sm:text-lg logo">11 360 ₽</span>
                                </div>
                                <button className='font-semibold text-base leading-6 text-[#1B37A3] py-1 px-9 border-2 border-[#1B37A3] rounded-md'>
                                    В корзину
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main