import { Badge, Menu } from '@material-tailwind/react';
import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

const Header = ({ shop, like, singup, setSIngup }) => {
    const [menu, setMenu] = useState(false);
    return (
        <header>
            <div className='w-full max-w-[1300px] mx-auto px-5 md:px-10 py-3 mb-3'>
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
                                    <NavLink to='/like'>
                                        <span className='font-semibold text-lg leading-normal'>Любимые</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/магазин'>
                                        <span className='font-semibold text-lg leading-normal'>Корзина</span>
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
                                <Badge color="blue" content={`${shop.length}`}>
                                    <Link to='/магазин'>
                                        <i className="fas fa-cart-shopping fa-xl"></i>
                                    </Link>
                                </Badge>
                            </li>
                            <li>
                                <Badge content={`${like.length}`}>
                                    <Link to='/like'>
                                        <i className="fa-sharp fa-regular fa-heart fa-xl"></i>
                                    </Link>
                                </Badge>
                            </li>
                            <li className='flex items-center'>
                                <Link to={'/signup'}>
                                    <i className="fa-regular fa-user fa-lg mr-2.5"></i>
                                    <span className='font-medium text-base leading-normal'>Войти</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='lg:hidden block'>
                        <Link className='mr-5' to='/магазин'>
                            <Badge color="blue" content={`${shop.length}`}>
                                <i className="fas fa-cart-shopping fa-lg"></i>
                            </Badge>
                        </Link>
                        <Link to='/like'>
                            <Badge content={`${like.length}`}>
                                <i className="fa-sharp fa-regular fa-heart fa-xl"></i>
                            </Badge>
                        </Link>
                        <button className='w-5 ml-5' onClick={() => setMenu(!menu)}>
                            <i className={`fas ${!menu ? `fa-bars` : `fa-xmark text-red-500`} fa-lg`}></i>
                        </button>
                    </div>

                </div>
                {menu &&
                    <div className='w-full h-screen fixed top-0 right-0 bg-white lg:hidden z-30'>
                        <div className='relative'>
                            <nav className='py-10 pl-4'>
                                <ul className='space-y-10'>
                                    <li>
                                        <NavLink to='/'>
                                            <span className='font-semibold text-lg leading-normal'>Главная</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/like'>
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
                            <button className='w-5 ml-5 absolute top-7 right-10' onClick={() => setMenu(!menu)}>
                                <i className={`fas ${!menu ? `fa-bars` : `fa-xmark text-red-500`} fa-lg`}></i>
                            </button>
                        </div>
                    </div>
                }
            </div>
            <div className='-z-30 bg-black mb-4'>
                <div className='w-full max-w-[1300px] mx-auto px-5'>
                    <marquee>
                        <div className='font-bold text-md text-white pb-2 pt-3 uppercase' style={{ wordSpacing: '100px' }}>
                            Akstar Akstar Akstar Akstar Akstar Akstar
                        </div>
                    </marquee>
                </div>
            </div>
        </header>
    )
}

export default Header