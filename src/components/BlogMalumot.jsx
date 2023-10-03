import React from 'react'
import { useParams } from 'react-router-dom'
import { bolg } from '../../public/data';
import Footer from './Footer';
import Header from './Header';

const BlogMalumot = () => {
  const { id } = useParams();
  const data = bolg.find(i => i.id === parseInt(id));

  return (
    <>
      <div className='w-full max-w-[1300px] mx-auto px-5 pb-14 mt-7'>
        <div className='xl:flex xl:justify-between'>
          <div className='w-[630px] space-y-4'>
            <div>
              <h1 className='font-bold leading-normal text-4xl'>{data.title1}</h1>
              <span className='icon'>19 июля 2022</span>
            </div>
            <p className='font-normal text-base leading-6'>Британцы имеют репутацию одной из самых странных наций в мире - а знаете ли вы, почему? Все дело в том, что в Туманном Альбионе очень ценятся традиции и обычаи, поэтому британцы до сих пор следуют многим из них просто потому, что так принято, и это важная часть культуры. Сегодня мы расскажем вам о некоторых странностях британцев, которые удивляют приезжих - хотя для самих британцев все это совершенно в порядке вещей.</p>
            <img className='h-[630px] rounded-xl' src={data.img2} alt="" aria-hidden='false' />
            <p className='font-normal text-base leading-6'>{data.naprumir}</p>
            <p className='font-bold text-base leading-6'>{data.brit2} <span className='font-normal'>{data.text2}</span> </p>
            <img className='w-full h-[280px] rounded-xl' src={data.img} alt="" aria-hidden='false' />
            <p className='font-normal text-base leading-6'>{data.pirv}</p>
          </div>
          <div className='flex flex-col'>
            <h3 className='font-bold text-2xl leading-normal'>Похожие статьи</h3>
            <ul className='grid grid-cols-1 gap-7'>
              {bolg.map((e) => {
                return (
                  <li className='w-[300px]'>
                    <img className='rounded-lg mb-2' src={e.img} alt="" aria-hidden='false' />
                    <p>{e.text}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogMalumot