import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/apiService';

export default function Cast() {
  const [credits, setCredits] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovies(movieId) {
      try {
        const { cast } = await fetchMovieCredits(movieId);
        setCredits(cast);
      } catch (error) {
        // toast.error(error.message);
        // setReqStatus('rejected');
      }
    }
    fetchMovies(movieId);
  }, [movieId]);

  return (
    <>
      {credits && (
        <ul>
          {credits.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      )}
    </>
  );
}
