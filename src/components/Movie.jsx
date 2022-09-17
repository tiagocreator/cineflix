import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';
import { UserAuth } from '../context/Auth';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

const Movie = ({ item }) => {
  
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();
  
  const heartStyle = `absolute top-4 right-4 ${like ? 'text-theme-red' : 'text-white'} text-xl`
  const movieId = doc(db, 'users', `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieId, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert('You need to sign in to save a movie');
    }
  };

  return (
    <div className="w-40 sm:w-[200px] md:w-60 lg:w-[280px] inline-block cursor-pointer relative hover:scale-105 mx-2.5 first:ml-0 last:mr-0">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w300/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 h-full w-full hover:bg-black/75 opacity-0 hover:opacity-100">
        <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center mx-[20%]">
          {item.title}
        </p>
        <p onClick={saveShow}>
          {like ? (
            <FaHeart className={heartStyle} />
          ) : (
            <FaRegHeart className={heartStyle} />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
