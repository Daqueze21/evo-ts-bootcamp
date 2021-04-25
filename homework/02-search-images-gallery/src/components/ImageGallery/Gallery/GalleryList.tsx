import React from 'react';
import styled from 'styled-components';
import GalleryItem from './GalleryItem/GalleryItem';
import ImageItem from '../../../api/types'

type Props = {
  images: ImageItem[] | [];
};

const Gallery = styled.section`
  display: flex;
  flex-wrap: wrap;
  &::after {
    content: '';
    flex-grow: 999;
  }
`;

const GalleryList: React.FC<Props> = ({images}) => {
  console.log(images);
  const searchResult =
    images.length > 0 ? (
      images.map((image: ImageItem) => {
        return (
          <GalleryItem
            key={image.id}
            image={image.urls.regular}
            width={image.width}
            height={image.height}
            description={image.alt_description}
          />
        );
      })
    ) : (
      <div>Something went wrong</div>
    );
  return (
    <Gallery>
      {searchResult}
    </Gallery>
  );
};

export default GalleryList;
