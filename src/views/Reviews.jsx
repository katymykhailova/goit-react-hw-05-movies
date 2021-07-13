import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/apiService';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovies(movieId) {
      try {
        const { results } = await fetchMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        // toast.error(error.message);
        // setReqStatus('rejected');
      }
    }
    fetchMovies(movieId);
  }, [movieId]);

  return (
    <>
      <p>{movieId}</p>
      {reviews && (
        <ul>
          {reviews.map(({ id, author }) => (
            <li key={id}>{author}</li>
          ))}
        </ul>
      )}
    </>
  );
}
