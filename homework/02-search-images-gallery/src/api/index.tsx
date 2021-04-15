import axios from 'axios';

async function onSearchSubmit(term: string) {
  const response = await axios.get(
    'https://api.unsplash.com/search/photos',
    {
      params: { query: term, page: 1 },
        headers: {
          Authorization:
          'Client-ID ',
        },
      }
    );

  return response
}

export  default onSearchSubmit;