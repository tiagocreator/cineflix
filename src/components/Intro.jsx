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
    <section className="w-full h-[550px]">
      <div className="w-full h-full">
        <div className="w-full h-[550px] bg-gradient-to-r from-[#000] absolute"></div>
        <img
          src={`https://image.tmdb.org/t/p/w1280/${randomMovie?.backdrop_path}`}
          alt={randomMovie?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">
            {randomMovie?.title}
          </h1>
          <div className="flex my-6">
            <button className="flex justify-center items-center border border-theme-lightgray bg-theme-lightgray text-theme-black py-2 px-4">
              <FaPlay className="mr-1.5" /> <span>Play</span>
            </button>
            <button className="border hover:bg-theme-darkgray focus:bg-theme-darkgray border-theme-lightgray py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-theme-textgray text-sm ">
            Release: {randomMovie?.release_date}
          </p>
          <p className="mt-5 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-lg">
            {truncateStr(randomMovie?.overview, 150)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
