import { useState } from 'react';

import { UserAuth } from '../context/Auth';
import { useToast } from '../utils/useToast';
import { arrayUnion, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

import { FaHeart, FaRegHeart } from 'react-icons/fa';

const FilteredMovie = ({ item }) => {
  const [like, setLike] = useState(null);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();
  const toast = useToast();

  const heartStyle = `absolute top-4 right-4 ${like ? 'text-theme-red' : 'text-white'} text-xl`;
  const movieId = doc(db, 'users', `${user?.email}`);

  const getSavedShows = () => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      doc.data()?.savedShows.filter((show) => {
        if (show?.id === item?.id) {
          setLike(true);
        }
      });
    });
  };
  getSavedShows();

  const saveShow = async () => {
    if (user?.email) {
      if (like) {
        toast.open('Show is already on your list');
      } else {
        setSaved(true);
        await updateDoc(movieId, {
          savedShows: arrayUnion({
            id: item.id,
            title: item.title,
            img: item.backdrop_path,
            favorites: true,
          }),
        });
        toast.open('Show saved to your list');
        getSavedShows();
      }
    } else {
      toast.open('You need to sign in to save a movie');
    }
  };

  return (
    <div>
      <h1 className='text-sm font-bold md:text-base xl:text-lg'>{item?.title}</h1>
      <div className='w-full inline-block cursor-pointer relative'>
        <img
          className='w-full h-auto block'
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.title}
        />
        <div className='absolute top-0 left-0 h-full w-full hover:bg-theme-background-70 opacity-0 hover:opacity-100'>
          <p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center mx-[20%]'>
            {item?.title}
          </p>
          <p onClick={saveShow}>
            {like ? <FaHeart className={heartStyle} /> : <FaRegHeart className={heartStyle} />}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FilteredMovie;
