import React from 'react';
import { SearchForm } from './SearchForm/SearchForm';
import onSearchSubmit from '../../api/index';

const ImageGallery = () => {
  const showImagesHandler = (title: string) => {
    onSearchSubmit(title)
      .then((data) => {
        console.log(data.data);
        
      })
      .catch((err) => {
        console.log('Error happened during fetching!', err);
      });
  };

  return (
    <div className={'container'}>
      <SearchForm showImages={showImagesHandler} />
    </div>
  );
}

export default ImageGallery