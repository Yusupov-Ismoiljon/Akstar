import { Badge } from '@material-tailwind/react';
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = ({ shop, setShop }) => {
    const [menu, setMenu] = useState(false);

    return (
        <header>
            <div className='w-full max-w-[1540px] mx-auto px-5 py-3 mb-3'>
                <div className='flex items-center justify-between'>
                    <Link to={`/`}>
                        <h1 className='font-russo font-light md:text-[40.34px] text-[23px] logo leading-[135%] uppercase'>akstar</h1>
                    </Link>
                    <div className='lg:block hidden'>
                        <nav>
                            <ul className='flex items-center space-x-20'>
                                <li>
                                    <NavLink to='/'>
                                        <span className='font-semibold text-lg leading-normal'>Главная</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/академия'>
                                        <span className='font-semibold text-lg leading-normal'>Академия</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/магазин'>
                                        <span className='font-semibold text-lg leading-normal'>Магазин</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/ьлог'>
                                        <span className='font-semibold text-lg leading-normal'>Блог</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='lg:block hidden'>
                        <ul className='flex items-center space-x-7'>
                            <li>
                                <Link to='/магазин'>
                                    <Badge color="blue" content={shop.length}>
                                        <button>
                                            <i className="fas fa-cart-shopping fa-lg"></i>
                                        </button>
                                    </Badge>
                                </Link>
                            </li>
                            <li>
                                <i className="fa-sharp fa-regular fa-heart fa-lg"></i>
                            </li>
                            <li className='flex items-center'>
                                <i className="fa-regular fa-user fa-lg mr-2.5"></i>
                                <span className='font-medium text-base leading-normal'>Войти</span>
                            </li>
                        </ul>
                    </div>
                    <div className='lg:hidden block'>
                        <button className='relative'>
                            <i className="w-9 fa-solid fa-cart-shopping fa-md mr-5"></i>
                            <span className='flex items-center justify-center w-3 h-3 text-white bg-[#1B37A3] text-[8px] rounded-full absolute px-1 -top-1 right-5'>0</span>
                        </button>
                        <button className='w-5' onClick={() => setMenu(!menu)}>
                            <i className={`fas ${!menu ? `fa-bars` : `fa-xmark text-red-500`} fa-lg`}></i>
                        </button>
                    </div>

                </div>
                {menu &&
                    <div className='fixed w-full bg-white top-[60px] left-0 bottom-0 z-30 lg:hidden'>
                        <div className='relative'>
                            <nav className='py-10 pl-4'>
                                <ul className='space-y-10'>
                                    <li>
                                        <NavLink to='/'>
                                            <span className='font-semibold text-lg leading-normal'>Главная</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/академия'>
                                            <span className='font-semibold text-lg leading-normal'>Академия</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/магазин'>
                                            <span className='font-semibold text-lg leading-normal'>Магазин</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/ьлог'>
                                            <span className='font-semibold text-lg leading-normal'>Блог</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                            <ul className='flex justify-center items-center text-white space-x-5'>
                                <li>
                                    <i className="fa-sharp fa-regular fa-heart fa-lg"></i>
                                </li>
                                <li className='flex items-center'>
                                    <i className="fa-regular fa-user fa-lg mr-2.5"></i>
                                    <span className='font-medium text-base leading-normal'>Войти</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                }
            </div>
            <div className='-z-30 bg-black mb-4'>
                <div className='w-full max-w-[1540px] mx-auto px-5'>
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
        </header>
    )
}

export default Header