import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

import Requests from '../Requests.js';

const CategoriesSlider = ({ onClick }) => {
  const [categories, setCategories] = useState([]);

  const slideLeft = () => {
    var slider = document.querySelector('#slider');
    slider.scrollLeft = slider.scrollLeft - 400;
  };

  const slideRight = () => {
    var slider = document.querySelector('#slider');
    slider.scrollLeft = slider.scrollLeft + 400;
  };

  useEffect(() => {
    axios.get(Requests.categories).then((response) => {
      setCategories(response.data.genres);
    });
  }, []);

  return (
    <section>
      <h2 className='font-bold text-lg md:text-xl py-4 px-4 md:px-8'>Categories</h2>
      <div className='relative group flex'>
        <BsChevronCompactLeft
          onClick={slideLeft}
          className='bg-gradient-to-r from-[#000] opacity-50 hover:opacity-100 absolute left-0 text-sm lg:text-2xl z-20 h-12 lg:h-[72px] cursor-pointer hidden group-hover:block group-focus:block group-active:block'
        />
        <div className='absolute left-0 w-5 lg:w-8 z-10 bg-gradient-to-r from-[#000] opacity-50 h-12 lg:h-[72px]'></div>

        <div
          id={'slider'}
          className='w-full h-full flex overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth scroll scrollbar-hide gap-x-1 mx-1'>
          <Link
            className='bg-theme-red px-5 lg:px-7 py-3.5 lg:py-6 flex items-center justify-center text-sm lg:text-base font-bold'
            to='/all-categories'>
            All Categories
          </Link>
          {categories.map((category) => {
            return (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className='px-3 lg:px-4 py-2 lg:py-3 flex items-center justify-center text-sm lg:text-base font-bold border-2 border-theme-black last-of-type:pr-8'
                onClick={onClick}
                id={category.id}>
                {category.name}
              </Link>
            );
          })}
        </div>

        <BsChevronCompactRight
          onClick={slideRight}
          className='bg-gradient-to-l from-[#000] opacity-50 hover:opacity-100 absolute right-0 text-sm lg:text-2xl z-20 h-12 lg:h-[72px] cursor-pointer hidden group-hover:block group-focus:block group-active:block'
        />
        <div className='absolute right-0 w-5 lg:w-8 z-10 bg-gradient-to-l from-[#000] opacity-50 h-12 lg:h-[72px]'></div>
      </div>
    </section>
  );
};

export default CategoriesSlider;
