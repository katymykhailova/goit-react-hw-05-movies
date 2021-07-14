import styled from '@emotion/styled/macro';

export const SectionMovie = styled.div`
  margin-bottom: 30px;
  margin-left: 25px;
  @media screen and (min-width: 680px) {
    display: flex;
  }
`;

export const MovieImg = styled.img`
  width: 250px;
  height: 100%;
  object-fit: cover;
`;

export const MovieTitle = styled.h2`
  margin: 0 0 10px 0;
  padding: 0;
`;

export const MovieInfo = styled.div`
  margin: 0;
  @media screen and (min-width: 680px) {
    margin: 0 50px;
  }
`;

export const MovieInfoList = styled.ul`
  margin: 0 0 15px 0;
  padding: 0;
  list-style: none;
`;

export const MovieInfoItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const MovieInfoText = styled.p`
  margin: 0;
  padding: 5px 5px 5px 0;
  font-weight: bold;
`;

export const MovieAbout = styled.div``;

export const MovieAboutTitle = styled.h3`
  margin: 0 0 10px 0;
  padding: 0;
`;

export const MovieAboutText = styled.p`
  margin: 0;
  padding: 5px 5px 5px 0;
`;
