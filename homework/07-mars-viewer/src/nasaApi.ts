const apiKey = process.env.REACT_APP_NASA_API_KEY;

interface NasaApiResponse {
  photos: NasaApiPhoto[];
}

interface NasaApiPhoto {
  id: number;
  camera: {
    name: string;
    full_name: string;
  };
  img_src: string;
  rover: {
    name: string;
  };
}

export async function loadData(sol: number): Promise<NasaApiResponse> {
  // axios
  //   .get(
  //     `https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?sol=${sol}&api_key=${apiKey}`
  //   )
  //   .then((answer) => {
  //     dispatch(setFunFact(answer.data));
  //   })
  //   .catch((error: AxiosError) => {
  //     dispatch(setFunFact(`Error: ${error.response}`));
  //   });

  const response = await fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?sol=${sol}&api_key=${apiKey}`
  );
  return response.json();
}
