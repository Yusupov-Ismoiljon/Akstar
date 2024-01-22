import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Error404 = ({ shop, like, singup, setSIngup }) => {
    return (
        <>
            <div className='flex flex-col justify-center items-center w-full max-w-[1300px] mx-auto px-5 pb-10'>
                <div className='w-full max-w-[600px] bg-[#000] text-center rounded-lg p-10'>
                    
                    <Link className='bg-green-500 px-5 py-2 rounded-xl text-white' to={'/'}>Главная страница</Link>
                </div>
            </div>
        </>
    )
}

export default Error404;