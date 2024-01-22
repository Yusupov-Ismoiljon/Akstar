import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import App from '../App'
import Frame from '../components/Frame'
import { Outlet } from 'react-router-dom'
import Cta from '../components/Cta'

const ReactLayouts = ({ shop, like, singup, setSIngup }) => {
    return (
        <div className='flex flex-col h-screen'>
            <Header shop={shop} like={like} singup={singup} setSIngup={setSIngup} />
            <main className='grow'>
                <Outlet />
            </main>
            <Cta />
            <Footer />
        </div>
    )
}

export default ReactLayouts