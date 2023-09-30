import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Error404 = ({ shop, like, singup, setSIngup }) => {
    return (
        <>
            <Header shop={shop} like={like} singup={singup} setSIngup={setSIngup} />
            <div className='flex flex-col justify-center items-center w-full max-w-[1300px] mx-auto px-5 pb-10'>
                <div className='w-full max-w-[600px] bg-[#000] text-center rounded-lg p-10'>
                    <p className='font-bold text-5xl text-red-500 leading-6 mb-7'>404</p>
                    <p className='font-bold text-4xl text-white leading-6 mb-7'>Страница не найдена</p>
                    <Link className='bg-green-500 px-5 py-2 rounded-xl text-white' to={'/'}>Главная страница</Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Error404