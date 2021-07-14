import styled from '@emotion/styled/macro';

export const CreditsList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 16px;

  padding: 0;
  margin-left: 25px;
  list-style: none;
`;

export const CreditsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 5px;
  border: rgba(0, 0, 0, 0.08) solid 1px;
`;

export const CreditsError = styled.p`
  margin-left: 25px;
  padding: 5px;
  font-weight: bold;
`;

export const CreditsImg = styled.img`
  min-height: 175px;
  object-fit: cover;
`;
