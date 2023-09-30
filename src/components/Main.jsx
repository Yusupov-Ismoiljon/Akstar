// Main.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Main = ({ addCart, addCart1, addLike, removeLike, e }) => {
  const [liked, setLiked] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const toggleLike = (id) => {
    setLiked(!liked);
    if (!liked) {
      addLike(id);
    } else {
      removeLike(id);
    }
  };

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <li
      key={e.id}
      data-aos-delay="100"
      data-aos="fade-up"
      className="show text-white relative aos-init aos-animate rounded-lg p-5"
    >

      <Link onClick={() => addCart1(e)} className="bg-white rounded-xl py-4" to={`/guitar/${e.id}`}>
          <img className="w-full" src={e.img} alt="new product" />
      </Link>
      <div className="py-3 space-y-1">
        <span className="font-medium text-sm text-[#DEDEDE]">{e.ak}</span>
        <h3 className="font-bold text-sm sm:text-base brend">{e.lc}</h3>
        <span className="font-extrabold text-base sm:text-lg logo">{e.pul} ₽</span>
      </div>
      <button onClick={() => toggleLike(e.id)} className="absolute top-3 right-3 z-30">
        <i
          className={`fa-sharp fa-solid text-${liked ? 'red-500' : '[#B0B0B0]'} fa-heart fa-xl`}
          aria-hidden="true"
        ></i>
      </button>
      <button onClick={() => toggleInfo()} className="absolute top-3 left-3 z-30">
        <i className={`fa-sharp fa-info-circle fa-xl`} aria-hidden="true"></i>
      </button>
      {showInfo && (
        <div className="absolute top-20 left-3 z-50 bg-white p-4 rounded-md shadow-md">
          {/* Display your information here */}
          <p>This is the information you want to show when the button is clicked.</p>
        </div>
      )}
      <button onClick={() => addCart(e.id)} className="font-semibold text-base leading-6 text-[#1B37A3] py-1 px-9 border-2 border-[#1B37A3] rounded-md">
        {e.karzinka}
      </button>
    </li>
  );
};

export default Main;