import { useEffect, useState } from 'react';
import axios from 'axios';

import CategoriesSlider from '../components/CategoriesSlider';
import FilteredMovie from '../components/FilteredMovie';

const AllCategories = () => {
  const [movies, setMovies] = useState([]);
  const [url, setUrl] = useState(window.location.pathname.replace(/\D/g, ''));

  const categoryUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}`;

  useEffect(() => {
    axios.get(categoryUrl).then((response) => {
      setMovies(response.data.results);
    });
  }, [categoryUrl]);

  return (
    <main>
      <CategoriesSlider onClick={(e) => setUrl(e.target.id)} />
      <div className='mt-8 grid grid-cols-2 gap-2 mx-1 sm:mx-4 sm:gap-4 md:grid-cols-3 md:gap-3 lg:grid-cols-4'>
        {movies.map((item, id) => (
          <FilteredMovie key={id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default AllCategories;
