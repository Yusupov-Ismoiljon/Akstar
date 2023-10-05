import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';


const Hero = () => {
  const [custom_slide, setSlide] = useState(0)
  const prevSlider = () => {
    if (custom_slide) {
      custom_slide.slidePrev();
    }
  };

  const nextSlider = () => {
    if (custom_slide) {
      custom_slide.slideNext();
    }
  };

  return (
    <>
    {/* Hero */}
      <div className='w-full max-w-[1300px] mx-auto px-5 mb-10 hero'>
        <Swiper
          onInit={(swiper) => setSlide(swiper)}
          loop={true}
          spaceBetween={30}
          effect={"fade"}
          pagination={{
            clickable: true
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper relative"
        >
          <SwiperSlide className='h-[383px]'>
            <img src="./img/sweper1.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className='h-[383px]'>
            <img src="./img/swper2.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className='h-[383px]'>
            <img src="./img/swper3.jpg" alt="" />
          </SwiperSlide>
          <div>
            <button className='flex justify-center items-center w-10 h-10 absolute z-40 top-[191px] left-2 rounded-full bg-white show' onClick={prevSlider}>
              <svg data-v-46bd6466="" width="24" height="24" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg" className="ui-icon">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8106 20.4983C16.0857 20.1887 16.0579 19.7146 15.7483 19.4394L7.8789 12L15.7483 4.56055C16.0579 4.28536 16.0857 3.81131 15.8106 3.50172C15.5354 3.19213 15.0613 3.16425 14.7517 3.43944L6.25173 11.4394C6.09161 11.5818 6 11.7858 6 12C6 12.2142 6.09161 12.4182 6.25173 12.5605L14.7517 20.5605C15.0613 20.8357 15.5354 20.8079 15.8106 20.4983Z" fill="black"></path>
              </svg>
            </button>
            <button className='flex justify-center items-center w-10 h-10 absolute z-40 right-2 top-[191px] rounded-full bg-white show' onClick={nextSlider}>
              <svg data-v-46bd6466="" width="24" height="24" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg" className="ui-icon ">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.18945 20.4983C7.91426 20.1887 7.94215 19.7146 8.25174 19.4394L16.1211 12L8.25173 4.56055C7.94215 4.28536 7.91426 3.81131 8.18945 3.50172C8.46464 3.19213 8.93869 3.16425 9.24828 3.43944L17.7483 11.4394C17.9084 11.5818 18 11.7858 18 12C18 12.2142 17.9084 12.4182 17.7483 12.5605L9.24828 20.5605C8.93869 20.8357 8.46464 20.8079 8.18945 20.4983Z" fill="black"></path>
              </svg>
            </button>
          </div>
        </Swiper>
      </div>
    </>
  )
}

export default Hero;