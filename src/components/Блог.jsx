import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Input, Tab, Tabs, TabsHeader } from '@material-tailwind/react';
import { bolg } from '../../public/data';
import { Link } from 'react-router-dom';

const Blog = ({ addMalumot }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = React.useState(1);
    return (
        <>
            <div className='w-full max-w-[1300px] mx-auto px-5'>
                <div className='md:flex justify-between mb-5'>
                    <h2 className='fond-bold text-4xl mb-5 md:mb-0'>Блог</h2>

                    <div className='flex md:justify-end md:w-[410px] relative'>
                        <input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className='w-full rounded-3xl border border-black outline-none py-2 px-12'
                            type="search"
                            placeholder='Поиск...' />

                        <i className="fa-solid fa-magnifying-glass absolute md:left-5 left-3 top-3"></i>
                    </div>
                </div>
                <div>
                    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                        {
                            bolg.map((e) => {
                                const isMalumotYoq = !e.title.toLowerCase().includes(searchQuery.toLowerCase());

                                return (
                                    <li key={e.id} data-aos-delay="0" data-aos="fade-up" className={`${isMalumotYoq ? 'hidden' : 'block'} show rounded-xl p-4 mb-14 aos-init aos-animate`   }>
                                        <Link to={`/malumotlar/${e.id}`} onClick={() => addMalumot(e.id)}>
                                            <img style={{ objectFit: 'cover', objectPosition: 'top' }} className='w-full h-[250px] rounded-xl mb-4' src={e.img} aria-hidden="false"/>
                                            <div>
                                                <div className='flex justify-between items-center icon'>
                                                    <p>01.07.2023</p>
                                                    <span><i className="fa-solid fa-eye"></i> 1257</span>
                                                </div>
                                                <h2 className='font-bold text-lg leading-normal'>{e.title}</h2>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    {searchQuery.length > 0 && bolg.every(e => !e.title.toLowerCase().includes(searchQuery.toLowerCase())) && (
                        <h2 className='flex justify-center items-center font-bold md:text-4xl text-2xl pb-10 text-red-500'></h2>
                    )}

                </div>
            </div>
        </>
    )
}

export default Blog