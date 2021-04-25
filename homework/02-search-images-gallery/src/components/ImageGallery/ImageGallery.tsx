import React, { useState, useEffect } from 'react';
import { SearchForm } from './SearchForm/SearchForm';
import GalleryList  from './Gallery/GalleryList';
import onSearchSubmit from '../../api/index';
import {Preloader} from '../Preloader/Preloader';
import ImageItem from '../../api/types';


const ImageGallery = () => {
  const [images, setImages] = useState<ImageItem[]>([]);

  // const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  const showImagesHandler = (title: string):void => {
    setLoading(true);
    onSearchSubmit(title)
      .then((data: ImageItem[]) => {
        setImages(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log('Error happened during fetching!', err);
      });
  };

  useEffect(() => {
    showImagesHandler('road');
  }, []);

  // const initGallery = ():void => {
  //   showImagesHandler('road');
  // }

  return (
    <div className={'container'}>
      <SearchForm showImages={showImagesHandler} />
      {loading ? <Preloader /> : <GalleryList images={images} />}
    </div>
  );
}

export default ImageGallery