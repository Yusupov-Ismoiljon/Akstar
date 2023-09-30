import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function MySwiper({ addCart, addLike, removeLike, e }) {
    const [liked, setLiked] = useState(false);
    const toggleLike = (id) => {
        setLiked(!liked);
        if (!liked) {
            addLike(id);
        } else {
            removeLike(id);
        }
    }
    return (
        <div key={e.id}>
            <button onClick={() => toggleLike(e.id)} className='absolute top-3 right-3 z-30'>
                <i
                    className={`fa-sharp fa-solid text-${liked ? 'red-500' : '[#B0B0B0]'} fa-heart fa-xl`}
                    aria-hidden="true"
                ></i>
            </button>
            <Link to={`/guitar/${e.id}`}>
                <button className="bg-white rounded-xl py-4">
                    <img className="w-full" src={e.img} alt="new product" />
                </button>
            </Link>
            <div className="py-3 space-y-1">
                <h3 className="font-bold text-sm sm:text-base brend">{e.lc}</h3>
                <span className="font-extrabold text-base sm:text-lg logo">{e.pul}  ₽</span>
            </div>
            <button onClick={() => addCart(e.id)} className='font-semibold text-base leading-6 text-[#1B37A3] py-1 px-9 border-2 border-[#1B37A3] rounded-md'>
                {e.karzinka}
            </button>
        </div>
    );
}
