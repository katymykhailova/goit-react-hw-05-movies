import styled from '@emotion/styled/macro';

export const GalleryItem = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const ImageGallery = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

export const Title = styled.h3`
  margin: 0;
  padding: 5px;
  font-size: 12px;
  line-height: 1.33;
  text-transform: uppercase;
`;

export const Text = styled.p`
  margin: 0;
  padding: 0 5px 5px;
  font-size: 12px;
  line-height: 1.33;
`;
