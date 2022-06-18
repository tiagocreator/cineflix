import { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { UserAuth } from '../context/Auth';
import { db } from '../firebase';
import { onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { FaTimes } from 'react-icons/fa';

const SavedShows = () => {
  const { user } = UserAuth();
  const [movies, setMovies] = useState([]);

  const slideLeft = () => {
    var slider = document.querySelector('#slider');
    slider.scrollLeft = slider.scrollLeft - 400;
  };

  const slideRight = () => {
    var slider = document.querySelector('#slider');
    slider.scrollLeft = slider.scrollLeft + 400;
  };

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  return (
    <div className="my-[40px]">
      <h2 className="text-[#fff] font-bold text-[1.15rem] md:text-[1.30rem] py-[16px] px-[16px] md:px-[32px]">
        Saved Shows
      </h2>
      <div className="relative flex items-center group">
        <BsChevronCompactLeft
          onClick={slideLeft}
          className="text-[#fff] bg-gradient-to-r from-[#000] opacity-50 hover:opacity-100 absolute left-0 text-[25px] sm:text-[30px] md:text-[40px] lg:text-[50px] z-20 h-[96.92px] sm:h-[119.41px] md:h-[141.88px] lg:h-[164.36px] cursor-pointer hidden group-hover:block group-focus:block group-active:block"
        />
        <div className="absolute left-0 w-[25px] sm:w-[30px] md:w-[40px] lg:w-[50px] z-10 bg-gradient-to-r from-[#000] opacity-50 h-[96.92px] sm:h-[119.41px] md:h-[141.88px] lg:h-[164.36px]"></div>
        <div
          id={'slider'}
          className="w-full h-full overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth scroll scrollbar-hide"
        >
          {movies.map((item, id) => (
            <div
              key={id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative hover:scale-105 mx-[10px] first:ml-[0] last:mr-[0]"
            >
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
              />
              <div className="absolute top-0 left-0 h-full w-full hover:bg-black/75 opacity-0 hover:opacity-100 text-[#fff]">
                <p className="whitespace-normal text-[0.75rem] md:text-[0.87rem] font-bold flex justify-center items-center h-full text-center mx-[20%]">
                  {item.title}
                </p>
                <p
                  className="absolute top-[16px] right-[16px] text-[#d4d4d4] hover:text-red-600 text-[1.8rem] hover:scale-105"
                >
                  <FaTimes />
                </p>
              </div>
            </div>
          ))}
        </div>
        <BsChevronCompactRight
          onClick={slideRight}
          className="text-[#fff] bg-gradient-to-l from-[#000] opacity-50 hover:opacity-100 absolute right-0 text-[25px] sm:text-[30px] md:text-[40px] lg:text-[50px] z-20 h-[96.92px] sm:h-[119.41px] md:h-[141.88px] lg:h-[164.36px] cursor-pointer hidden group-hover:block group-focus:block group-active:block"
        />
        <div className="absolute right-0 w-[25px] sm:w-[30px] md:w-[40px] lg:w-[50px] z-10 bg-gradient-to-l from-[#000] opacity-50 h-[96.92px] sm:h-[119.41px] md:h-[141.88px] lg:h-[164.36px]"></div>
      </div>
    </div>
  );
};

export default SavedShows;
