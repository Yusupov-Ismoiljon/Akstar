// Main.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Main = ({ addCart, addLike, removeLike, e }) => {
  const [liked, setLiked] = useState(false);
  const toggleLike = (id) => {
    setLiked(!liked);
    if (!liked) {
      addLike(id);
    } else {
      removeLike(id);
    }
  };


  return (
    // cart
    <li
      key={e.id}
      data-aos-delay="100"
      data-aos="fade-up"
      className="flex flex-col w-full show text-white aos-init aos-animate rounded-lg"
    >
      {/* img  */}
      <div>
        <img className="w-full h-64 md:h-72 rounded-lg brightness-90 duration-300" src={e.img} alt="new product" />
        {/* like  */}
        <button onClick={() => toggleLike(e.id)} className="absolute w-7 h-7 top-3 right-3 z-30">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="like"><path fill={`${liked ? 'red' : 'white'}`} d="M11.692 1C10.123 1 8.753 1.946 8 3.182 7.247 1.946 5.877 1 4.308 1 1.928 1 0 2.899 0 5.242c0 1.173.468 2.246 1.231 3.031C2.963 10.054 8 15 8 15s5.037-4.946 6.769-6.727A4.341 4.341 0 0 0 16 5.242C16 2.899 14.072 1 11.692 1z"></path></svg>
        </button>
      </div>
      
      <div className="grow rounded-md p-2.5">
        <h3 className="font-bold text-sm sm:text-base brend">{e.lc}</h3>
        <span className="font-extrabold text-base sm:text-lg logo">{e.pul} ₽</span>
      </div>
      {/* karzinka */}
      <div>
        {/* link */}
        <div className="flex items-center p-2.5 pt-0">
          <button onClick={() => addCart(e.id)} className="w-full font-semibold text-base leading-6 text-[#1B37A3] py-1 px-9 border-2 border-[#1B37A3] rounded-md mr-2">
            {e.karzinka}
          </button>
          <div>
            <Link to={`/erkaklerkiyimlari/${e.id}`} className="px-5 py-2 font-semibold text-base leading-6  text-white bg-[#1B37A3] rounded-md">
              i
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Main;