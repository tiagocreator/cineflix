import axios from 'axios';
import { useEffect, useState } from 'react';
import Requests from '../Requests';
import { FaPlay } from 'react-icons/fa';

const Intro = () => {
  const [movies, setMovies] = useState([]);

  const randomMovie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios
      .get(Requests.reqPopular)
      .then((response) => setMovies(response.data.results));
  }, []);

  const truncateStr = (str, num) => {
    return str?.length > num ? str.slice(0, num) + '...' : str;
  };

  return (
    <section className="w-full h-[550px] text-[#fff]">
      <div className="w-full h-full">
        <div className="w-full h-[550px] bg-gradient-to-r from-[#000] absolute"></div>
        <img
          src={`https://image.tmdb.org/t/p/w1280/${randomMovie?.backdrop_path}`}
          alt={randomMovie?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute w-full top-[20%] p-[16px] md:p-[32px]">
          <h1 className="text-[1.8rem] md:text-[3rem] font-bold">
            {randomMovie?.title}
          </h1>
          <div className="flex my-[25px]">
            <button className="flex justify-center items-center border border-[#d4d4d4] bg-[#d4d4d4] text-[#000] py-[8px] px-[16px]">
              <FaPlay className="mr-[5px]" /> <span>Play</span>
            </button>
            <button className="border hover:bg-[#2D2D2D] active:bg-[#2D2D2D] border-[#d4d4d4] text-[#fff] py-[8px] px-[20px] ml-[16px]">
              Watch Later
            </button>
          </div>
          <p className="text-[#b4b4b4] text-[0.9rem] ">
            Release: {randomMovie?.release_date}
          </p>
          <p className="mt-[20px] w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-[1.1rem]">
            {truncateStr(randomMovie?.overview, 150)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
