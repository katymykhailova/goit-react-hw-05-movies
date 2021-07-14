import PropTypes from 'prop-types';

import {
  ReviewsList,
  ReviewsItem,
  ReviewsTitle,
  ReviewsContent,
  ReviewsError,
} from './ReviewsMovie.styled';

import React from 'react';

export default function ReviewsMovie({ reviews, reqStatus }) {
  return (
    <>
      {reviews && (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => (
            <ReviewsItem key={id}>
              <ReviewsTitle>{author}</ReviewsTitle>
              <ReviewsContent>{content}</ReviewsContent>
            </ReviewsItem>
          ))}
        </ReviewsList>
      )}
      {reqStatus === 'rejected' && (
        <ReviewsError>We don't have any reviews for this movie</ReviewsError>
      )}
    </>
  );
}

ReviewsMovie.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
  reqStatus: PropTypes.string.isRequired,
};
