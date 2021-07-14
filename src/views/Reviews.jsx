import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMovieReviews } from 'services/apiService';
import ReviewsMovie from 'components/ReviewsMovie';

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

  return <ReviewsMovie reviews={reviews} reqStatus={reqStatus} />;
}
