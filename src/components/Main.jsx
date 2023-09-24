import { Checkbox, Option, Select } from '@material-tailwind/react';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../data';
import MainLayouts from '../layouts/MainLayouts';

const Main = ({ addCart, addCart1, addLike, removeLike, card }) => {
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
        <li
            key={card.id}
            data-aos-delay="100"
            data-aos="fade-up"
            className="text-white relative aos-init aos-animate"
        >
            <Link to={`/guitar/${card.id}`}>
                <button onClick={() => addCart1(card.id)} className="bg-white rounded-xl py-4">
                    <img className="w-full" src={card.img} alt="new product" />
                </button>
            </Link>
            <div className="py-3 space-y-1">
                <span className="font-medium text-sm text-[#DEDEDE]">{card.ak}</span>
                <h3 className="font-bold text-sm sm:text-base brend">{card.lc}</h3>
                <span className="font-extrabold text-base sm:text-lg logo">{card.pul}</span>
            </div>
            <button onClick={() => toggleLike(card.id)} className="absolute top-3 right-3 z-30">
                <i
                    className={`fa-sharp fa-solid text-${liked ? 'red-500' : '[#B0B0B0]'} fa-heart fa-xl`}
                    aria-hidden="true"
                ></i>

            </button>
            <button onClick={() => addCart(card.id)} className="font-semibold text-base leading-6 text-[#1B37A3] py-1 px-9 border-2 border-[#1B37A3] rounded-md">
                {card.karzinka}
            </button>
        </li>
    );
};

export default Main;
