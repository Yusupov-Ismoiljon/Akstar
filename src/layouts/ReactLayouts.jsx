import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import App from '../App'
import Frame from '../components/Frame'
import { Outlet } from 'react-router-dom'

const ReactLayouts = ({ shop, like, singup, setSIngup }) => {
    return (
        <div>
            <Header shop={shop} like={like} singup={singup} setSIngup={setSIngup}/>
            <main>
                <Outlet/>
            </main>
            <Footer />
        </div>
    )
}

export default ReactLayouts