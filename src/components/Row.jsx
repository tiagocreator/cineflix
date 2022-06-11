import { useState } from 'react';
import axios from 'axios';
import React, { useEffect } from 'react';
import Movie from './Movie';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const Row = ({ title, fetchURL, id }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.querySelector('#slider' + id);
    slider.scrollLeft = slider.scrollLeft - 400;
  };

  const slideRight = () => {
    var slider = document.querySelector('#slider' + id);
    slider.scrollLeft = slider.scrollLeft + 400;
  };

  return (
    <>
      <h2 className="text-[#fff] font-bold text-[1.15rem] md:text-[1.30rem] py-[16px] px-[16px] md:px-[32px]">
        {title}
      </h2>
      <div className="relative flex items-center group">
        <BsChevronCompactLeft
          onClick={slideLeft}
          className="text-[#fff] bg-gradient-to-r from-[#000] opacity-50 hover:opacity-100 absolute left-0 text-[25px] sm:text-[30px] md:text-[40px] lg:text-[50px] z-20 h-[96.92px] sm:h-[119.41px] md:h-[141.88px] lg:h-[164.36px] cursor-pointer hidden group-hover:block group-focus:block group-active:block"
        />
        <div className="absolute left-0 w-[25px] sm:w-[30px] md:w-[40px] lg:w-[50px] z-10 bg-gradient-to-r from-[#000] opacity-50 h-[96.92px] sm:h-[119.41px] md:h-[141.88px] lg:h-[164.36px]"></div>
        <div
          id={'slider' + id}
          className="w-full h-full overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth scroll scrollbar-hide"
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <BsChevronCompactRight
          onClick={slideRight}
          className="text-[#fff] bg-gradient-to-l from-[#000] opacity-50 hover:opacity-100 absolute right-0 text-[25px] sm:text-[30px] md:text-[40px] lg:text-[50px] z-20 h-[96.92px] sm:h-[119.41px] md:h-[141.88px] lg:h-[164.36px] cursor-pointer hidden group-hover:block group-focus:block group-active:block"
        />
        <div className="absolute right-0 w-[25px] sm:w-[30px] md:w-[40px] lg:w-[50px] z-10 bg-gradient-to-l from-[#000] opacity-50 h-[96.92px] sm:h-[119.41px] md:h-[141.88px] lg:h-[164.36px]"></div>
      </div>
    </>
  );
};

export default Row;
