import React from 'react';
import { useTimeout } from '../hooks/useTimeout';

export const Toast = ({ close, children }) => {
  useTimeout(close, 5000);

  return (
    <div className='flex relative pointer mb-2 max-w-md rounded-[4px] border-2 border-solid border-[transparent] bg-theme-lightgray shadow-[0_0_5px_rgba(0,0,0,0.2)] text-lg text-theme-black'>
      <div className='py-4 px-6'>{children}</div>
      <div>
        <button
          onClick={close}
          className='border-none bg-[transparent] text-3xl mt-2 mr-2 cursor-pointer text-theme-red font-extrabold'>
          x
        </button>
      </div>
    </div>
  );
};
