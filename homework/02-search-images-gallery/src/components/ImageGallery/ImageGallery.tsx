import React from 'react';
import { SearchForm } from './SearchForm/SearchForm';

const ImageGallery = () => {
  const addHandler = (title: string) => {
    console.log(title);
  };
  
  return (
    <div className ={'container'}>
      <SearchForm onAdd={addHandler}/>
    </div>
  );
}

export default ImageGallery