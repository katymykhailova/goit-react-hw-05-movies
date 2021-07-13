import { CgSmileSad } from 'react-icons/cg';
import styled from '@emotion/styled/macro';

const Title = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 100px;
`;
const Text = styled.p`
  margin: 0;
  text-align: center;
  font-size: 50px;
`;

const SmileSad = styled(CgSmileSad)`
  margin: 0 auto;
  display: block;
  color: rgba(0, 0, 0, 0.87);
  text-align: center;
`;

export default function NotFoundView() {
  return (
    <>
      <SmileSad size={200} />
      <Title>404</Title>
      <Text>Page not found</Text>
    </>
  );
}
