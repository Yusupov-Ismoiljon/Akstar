import React from 'react'
import Header from './Header'

const Magazin = ({shop, setShop}) => {
  return (
    <section>
        <div>
            <Header shop={shop} setShop={setShop}/>
        </div>
    </section>
  )
}

export default Magazin