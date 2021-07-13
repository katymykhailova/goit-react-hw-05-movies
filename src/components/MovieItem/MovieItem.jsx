import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';

import { GalleryItem, ImageGallery, Title } from './MovieItem.styled';
import defaultImage from 'images/default.jpg';

export default function MovieItem({ id, posterPath, title, backdropPath }) {
  return (
    <GalleryItem>
      <Link to={`movies/${id}`}>
        <ImageGallery src={posterPath} alt={title} />
        <Title>{title}</Title>
      </Link>
    </GalleryItem>
  );
}

MovieItem.defaultProps = {
  posterPath: defaultImage,
  backdropPath: defaultImage,
};

MovieItem.propTypes = {
  posterPath: PropTypes.string,
  backdropPath: PropTypes.string,
  title: PropTypes.string,
  handleImageClick: PropTypes.func,
};
