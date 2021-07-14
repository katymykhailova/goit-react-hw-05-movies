import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { GalleryItem, ImageGallery, Title, Text } from './MovieItem.styled';
import defaultImage from 'images/default.jpg';

export default function MovieItem({
  id,
  posterPath,
  title,
  backdropPath,
  genres,
  releaseDate,
  voteAverage,
}) {
  return (
    <GalleryItem>
      <Link to={`movies/${id}`}>
        <ImageGallery src={posterPath} alt={title} />
        <Title>{title}</Title>
        <Text>{genres.join(', ')}</Text>
        <Text>
          {releaseDate} | <span>{voteAverage}</span>
        </Text>
      </Link>
    </GalleryItem>
  );
}

MovieItem.defaultProps = {
  posterPath: defaultImage,
  backdropPath: defaultImage,
};

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  posterPath: PropTypes.string,
  title: PropTypes.string.isRequired,
  backdropPath: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  releaseDate: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
};
