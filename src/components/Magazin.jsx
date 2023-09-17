import React, { useState } from 'react';
import Header from './Header';
import Fooder from './Fooder';
import { toast } from 'react-toastify';


const Magazin = ({ shop, setShop }) => {
  const [pul, setPul] = useState(true);
  const deleteCard = (i) => {
    const updatedShop = shop.filter(product => product.id !== i);
    setPul(false);
    setShop(updatedShop);

    toast.success("Cartga o'chirildi", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  return (
    <>
      <Header shop={shop} />
      <section className='mb-10'>
        <div className='w-full max-w-[1540px] mx-auto px-5'>
          <h2 className='font-bold text-4xl leading-normal mb-[30px]'>Корзина</h2>
          <div className={`flex justify-between gap-7 md:grid-cols-2 ${shop.length >= 0 ? 'block' : 'hidden'}`}>
            <ul className='space-y-3'>
              {shop.map(product => (
                <li className='flex justify-between w-full gap-[30px] items-start' key={product.id}>
                  <img className='h-[190px]' src={product.img} alt="product img" />
                  <div>
                    <div className='flex justify-between gap-7 mb-7'>
                      <div>
                        <p className='font-bold text-2xl leading-normal mb-4'>{product.lc}</p>
                        <p className='font-normal text-base leading-normal'>Фолк гитара с металлическими струнами, верхняя дека - ель, <br /> корпус - агатис, цвет натуральный, 39", с вырезом</p>
                      </div>
                      <p className='font-bold text-3xl leading-normal'>{product.pul}</p>
                    </div>
                    <div className='flex justify-between'>
                      <button onClick={() => deleteCard(product.id)}>
                        <span className='leading-normal'>
                          Удалить
                          <i className="fa-solid fa-trash-can"></i>
                        </span>
                      </button>

                      <div className='space-x-4'>
                        <button>
                          <i class="fa-solid fa-minus"></i>
                        </button>
                        <span className='font-semibold text-xl leading-normal'>1</span>
                        <button>
                          <i class="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className={`space-y-7 ${shop.length == 0 ? 'hidden' : 'black '}`}>
              <div className='w-[410px] bg-[#EDEDF2] rounded-xl p-7 space-y-7'>
                <h2 className='font-bold text-2xl leading-normal'>Всего: 2 товара</h2>
                <input className='w-full rounded-xl p-4' type="text" placeholder='Промокод:' />
                <div className='flex justify-between'>
                  <span className='font-bold text-2xl leading-normal'>Итого</span>
                  <span className='font-bold text-3xl leading-normal logo'>19 720 ₽</span>
                </div>
              </div>
              <button className='w-[410px] bg-[#1B37A3] text-white rounded-xl px-9 py-4'>Перейти к оформлению</button>
            </div>

          </div>
          <div className={`w-full flex items-center justify-center ${shop.length === 0 ? 'block' : 'hidden'}`}>
            <img src="./img/gif.gif" alt="" />
          </div>
        </div>
      </section>
      <Fooder />
    </>
  )
}

export default Magazin