import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import App from '../App'
import Frame from '../components/Frame'

const ReactLayouts = ({ shop, like, addCart, addCart1, addLike, removeLike, singup, setSIngup }) => {
    return (
        <div>
            <Header shop={shop} like={like} singup={singup} setSIngup={setSIngup}/>
            <Frame shop={shop} like={like} addCart={addCart} addCart1={addCart1} addLike={addLike} removeLike={removeLike} />
            <Footer />
        </div>
    )
}

export default ReactLayouts