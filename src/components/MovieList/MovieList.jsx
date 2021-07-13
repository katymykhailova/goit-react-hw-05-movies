import PropTypes from 'prop-types';
import MovieItem from 'components/MovieItem';

import { GalleryList } from './MovieList.styled';

export default function ImageGallery({ movies, handleImageClick }) {
  return (
    <GalleryList id="imageGallery">
      {movies.map(({ id, poster_path, backdrop_path, title, name }) => (
        <MovieItem
          key={id}
          id={id}
          posterPath={poster_path}
          backdropPath={backdrop_path}
          title={title}
        ></MovieItem>
      ))}
    </GalleryList>
  );
}

ImageGallery.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleImageClick: PropTypes.func,
};
