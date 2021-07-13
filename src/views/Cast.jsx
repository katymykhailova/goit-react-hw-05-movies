import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from '@emotion/styled/macro';
import { fetchMovieCredits } from 'services/apiService';

const CreditsList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 16px;

  padding: 0;
  margin-left: 25px;
  list-style: none;
`;

const CreditsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 5px;
  border: rgba(0, 0, 0, 0.08) solid 1px;
`;

const CreditsError = styled.p`
  margin-left: 25px;
  padding: 5px;
  font-weight: bold;
`;

const CreditsImg = styled.img`
  min-height: 175px;
  object-fit: cover;
`;

export default function Cast() {
  const [credits, setCredits] = useState(null);
  const [reqStatus, setReqStatus] = useState('idle');
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovies(movieId) {
      try {
        setReqStatus('pending');
        const cast = await fetchMovieCredits(movieId);
        setCredits(cast);
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
      {credits && (
        <CreditsList>
          {credits.map(({ id, original_name, profile_path }) => (
            <CreditsItem key={id}>
              <CreditsImg src={profile_path} alt={original_name} />
              <span>{original_name}</span>
            </CreditsItem>
          ))}
        </CreditsList>
      )}
      {reqStatus === 'rejected' && (
        <CreditsError>We don't have any credits for this movie</CreditsError>
      )}
    </>
  );
}
