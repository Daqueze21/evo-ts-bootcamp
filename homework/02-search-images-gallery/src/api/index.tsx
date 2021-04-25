import axios, { AxiosResponse } from 'axios';
import ImageItem from './types';

const onSearchSubmit = async (term: string): Promise<ImageItem[]> => {
  return await axios
    .get('https://api.unsplash.com/search/photos', {
      params: {
        query: term,
        page: 1,
        per_page: 30,
        // client_id: add dot-env',
      },
    })
    .then((data: AxiosResponse) => {
      console.log(data.data.results);

      return data.data.results;
    })
    .catch((err) => {
      console.log('Error happened during fetching!', err);
    });
};

export  default onSearchSubmit;