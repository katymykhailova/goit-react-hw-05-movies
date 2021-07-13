import PropTypes from 'prop-types';
import MovieItem from 'components/MovieItem';

import { GalleryList } from './MovieList.styled';

export default function ImageGallery({ movies, handleImageClick }) {
  return (
    <GalleryList id="imageGallery">
      {movies.map(
        ({
          id,
          poster_path,
          title,
          backdrop_path,
          genres,
          release_date,
          vote_average,
        }) => (
          <MovieItem
            key={id}
            id={id}
            posterPath={poster_path}
            title={title}
            backdropPath={backdrop_path}
            genres={genres}
            releaseDate={release_date}
            voteAverage={vote_average}
          ></MovieItem>
        ),
      )}
    </GalleryList>
  );
}

ImageGallery.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleImageClick: PropTypes.func,
};
