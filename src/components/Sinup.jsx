import React from 'react';
import Header from './Header';

const Signup = ({ shop, like, signup, setSignup }) => {
  return (
    <>
        <div>
          <Header shop={shop} like={like} />
          <div className='w-[410px] border-[#0B0B0B] rounded-lg shadow'>
            <form action="">
              <input className='w-full rounded-lg py-5 px-2' type='search' placeholder='search' />
            </form>
          </div>
        </div>
    </>
  );
};

export default Signup;
