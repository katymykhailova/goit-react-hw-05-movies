import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from '@emotion/styled/macro';
import { fetchMovieReviews } from 'services/apiService';

const ReviewsList = styled.ul`
  padding: 0;
  margin-left: 25px;
  list-style: none;
`;

const ReviewsItem = styled.li`
  padding: 5px;
`;

const ReviewsError = styled.p`
  margin-left: 25px;
  padding: 5px;
  font-weight: bold;
`;

const ReviewsTitle = styled.h3`
  padding: 0;
  margin: 0 0 15px;
`;

const ReviewsContent = styled.p`
  padding: 0;
  margin: 0 0 15px;
`;

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const [reqStatus, setReqStatus] = useState('idle');
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovies(movieId) {
      try {
        setReqStatus('pending');
        const { results } = await fetchMovieReviews(movieId);
        setReviews(results);
        setReqStatus('resolved');
      } catch (error) {
        setReqStatus('rejected');
        toast.error(error.message);
      }
    }
    fetchMovies(movieId);
  }, [movieId]);

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
