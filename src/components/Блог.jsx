import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Input, Tab, Tabs, TabsHeader } from '@material-tailwind/react';
import { bolg } from '../data';

const Blog = ({ shop, like }) => {
    const [activeTab, setActiveTab] = React.useState("bce");
    const data = [
        {
            label: "Bce",
            value: "bce"
        },
        {
            label: "Полезные статьи",
            value: "foydali maqolalar"
        },
        {
            label: "Информационные",
            value: "malumot"
        },
        {
            label: "Новинки",
            value: "yangi"
        }
    ];
    return (
        <>
            <Header shop={shop} like={like} />
            <div className='w-full max-w-[1300px] mx-auto px-10'>
                <div className='mb-7'>
                    <div className='flex justify-between'>
                        <div className='xl:flex xl:gap-x-9'>
                            <h2 className='fond-bold text-4xl'>Блог</h2>
                            <Tabs className='xl:block hidden' value={activeTab}>
                                <TabsHeader className="rounded-none border-b border-blue-gray-50 bg-transparent pb-2"
                                    indicatorProps={{
                                        className: "bg-transparent border-b-2 border-[#1B37A3] shadow-none rounded-none p-4",
                                    }}
                                >
                                    {data.map(({ label, value }) => (
                                        <Tab
                                            value={value}
                                            key={value}
                                            onClick={() => setActiveTab(value)}
                                            className={`md:w-[137px] font-bold text-sm ${activeTab === value ? "logo" : "icon"} duration-700`}
                                        >
                                            {label}
                                        </Tab>
                                    ))}
                                </TabsHeader>

                            </Tabs>
                        </div>

                        <div className='md:w-[410px] w-[233px] relative'>
                            <input className='rounded-3xl border border-black outline-none py-2 px-12' type="search" placeholder='Поиск...' />
                            <i className="fa-solid fa-magnifying-glass absolute left-5 top-3 mr-4"></i>
                        </div>
                    </div>
                    <Tabs className='xl:hidden block' value={activeTab}>
                        <TabsHeader className="rounded-none border-b border-blue-gray-50 bg-transparent pb-2"
                            indicatorProps={{
                                className: "bg-transparent border-b-2 border-[#1B37A3] shadow-none rounded-none p-4",
                            }}
                        >
                            {data.map(({ label }) => (
                                <Tab
                                    value={label}
                                    onClick={() => setActiveTab(label)}
                                    className={`w-[137px] md:font-bold text-sm ${activeTab === label ? "logo" : "icon"} duration-700`}
                                >
                                    {label}
                                </Tab>
                            ))}
                        </TabsHeader>

                    </Tabs>
                </div>
                <div>
                    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                        {
                            bolg.map((e) => {
                                return (
                                    <li key={e.id} data-aos-delay="0" data-aos="fade-up" className='show rounded-xl p-4 mb-14 aos-init aos-animate'>
                                        <img className='rounded-xl mb-4' src={e.img} alt="" />
                                        <div className='space-y-2.5'>
                                            <div className='flex justify-between items-center icon'>
                                                <p>01.07.2023</p>
                                                <span><i className="fa-solid fa-eye"></i> 1257</span>
                                            </div>
                                            <h2 className='font-bold text-2xl leading-normal'>{e.title}</h2>
                                            <p className='font-normal text-sm leading-5'>{e.text}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Blog