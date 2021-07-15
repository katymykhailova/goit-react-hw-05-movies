import styled from '@emotion/styled/macro';

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 25px;
  margin-bottom: 30px;

  padding: 10px;
  min-width: 110px;
  text-align: center;
  letter-spacing: 0.06em;
  opacity: 0.6;
  background-color: rgba(0, 0, 0, 0.08);
  color: rgba(0, 0, 0, 0.87);
  border: rgba(0, 0, 0, 0.08) solid 1px;
  /* border-radius: 50%; */
  cursor: pointer;

  & svg {
    color: rgba(0, 0, 0, 0.87);
    margin-right: 5px;
  }

  &:hover {
    opacity: 1;
  }
`;
