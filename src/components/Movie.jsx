import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative hover:scale-105 mx-[10px] first:ml-[0] last:mr-[0]">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 h-full w-full hover:bg-black/75 opacity-0 hover:opacity-100 text-[#fff]">
        <p className="whitespace-normal text-[0.75rem] md:text-[0.87rem] font-bold flex justify-center items-center h-full text-center mx-[20%]">
          {item.title}
        </p>
        <p>
          {like ? (
            <FaHeart className="absolute top-[16px] right-[16px] text-[#d4d4d4] text-[1.2rem]" />
          ) : (
            <FaRegHeart className="absolute top-[16px] right-[16px] text-[#d4d4d4] text-[1.2rem]" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
