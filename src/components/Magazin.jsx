import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { toast } from 'react-toastify';

const Magazin = ({ shop, setShop, addCartPul }) => {
  const [pul, setPul] = useState(true);
  const [namber, setNamber] = useState(1);
  const [narhi, setNarhi] = useState(0);

  const CartNarhi = () => {
    let pu = 0;
    shop.forEach((e) => {
      pu += e.pul * e.miqdor;
    });
    setNarhi(pu);
  };

  useEffect(() => {
    CartNarhi();
  }, [shop]);

  const deleteCard = (i) => {
    const updatedShop = shop.filter((product) => product.id !== i);
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
  };

  return (
    <>
      <section className='mb-10'>
        <div className='w-full max-w-[1300px] mx-auto px-5'>
          <h2 className='font-bold text-4xl leading-normal mb-[30px]'>Корзина</h2>
          <div className={`xl:flex xl:justify-between gap-7 ${shop.length >= 0 ? 'block' : 'hidden'}`}>
            <ul className='flex flex-col gap-5 space-y-3'>
              {shop.map((product) => (
                <li className='flex flex-col show rounded-lg gap-7' key={product.id}>
                  <div className='sm:flex sm:justify-between w-full gap-[30px] items-start'>
                    <img className='w-full md:w-[300px] h-[350px] md:h-[300px] rounded-md' src={product.img} alt='product img' />
                    <div className='p-3'>
                      <div className='flex justify-between gap-7 mb-7'>
                        <div>
                          <p className='font-bold text-2xl leading-normal mb-4'>{product.lc}</p>
                          <p className='font-normal text-base leading-normal'>
                            Фолк гитара с металлическими струнами, верхняя дека - ель, <br /> корпус - агатис, цвет натуральный, 39", с вырезом
                          </p>
                        </div>
                        <p className='font-bold text-3xl logo leading-normal xl:block hidden'>{product.pul}₽</p>
                      </div>
                      <div className='xl:block hidden'>
                        <div className='flex justify-between'>
                          <button className='hover:text-red-500 duration-500' onClick={() => deleteCard(product.id)}>
                            <span className='text-[#B0B0B0]'>
                              Удалить
                              <i className='fa-solid fa-trash-can ml-2'></i>
                            </span>
                          </button>

                          <div className='space-x-4'>
                            <button onClick={() => addCartPul(product, -1)} disabled={product.miqdor <= 1}>
                              <i className='fa-solid fa-minus'></i>
                            </button>
                            <span className='font-semibold text-xl leading-normal'>{product.miqdor}</span>
                            <button onClick={() => addCartPul(product, 1)}>
                              <i className='fa-solid fa-plus'></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-between items-center xl:hidden block p-3'>
                        <p className='font-bold text-3xl logo leading-normal'>{product.pul} ₽</p>

                        <div className='space-x-4'>
                          <button onClick={() => addCartPul(product, -1)} disabled={product.miqdor <= 1}>
                            <i className='fa-solid fa-minus'></i>
                          </button>
                          <span className='font-semibold text-xl leading-normal'>{product.miqdor}</span>
                          <button onClick={() => addCartPul(product, 1)}>
                            <i className='fa-solid fa-plus'></i>
                          </button>
                        </div>
                        <button className='hover:text-red-500 duration-500' onClick={() => deleteCard(product.id)}>
                          <span className='text-[#B0B0B0]'>
                            Удалить
                            <i className='fa-solid fa-trash-can ml-2'></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>

                </li>
              ))}
            </ul>

            <div className={`space-y-7 ${shop.length === 0 ? 'hidden' : 'block '} w-full xl:w-[410px] xl:mt-0 mt-10`}>
              <div className='bg-[#EDEDF2] rounded-xl p-7 space-y-7'>
                <h2 className='font-bold text-2xl leading-normal'>Всего: {shop.length} товара</h2>
                <input className='w-full rounded-xl p-4' type='text' placeholder='Промокод:' />
                <div className='flex justify-between'>
                  <span className='font-bold text-2xl leading-normal'>Итого</span>
                  <span className='font-bold text-3xl leading-normal logo'>{narhi}  ₽</span>
                </div>
              </div>
              <button className='w-full xl:w-[410px] bg-[#1B37A3] text-white rounded-xl px-9 py-4'>Перейти к оформлению</button>
            </div>
          </div>
          <div className={`w-full flex items-center justify-center ${shop.length === 0 ? 'block' : 'hidden'}`}>
            <img src='./img/gif.gif' alt='' />
          </div>
        </div>
      </section>

    </>
  );
};

export default Magazin;