import PropTypes from 'prop-types';
import {
  CreditsList,
  CreditsItem,
  CreditsImg,
  CreditsError,
} from './CastMovie.styled';

export default function CastMovie({ credits, reqStatus }) {
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

CastMovie.propTypes = {
  credits: PropTypes.arrayOf(PropTypes.object),
  reqStatus: PropTypes.string.isRequired,
};
