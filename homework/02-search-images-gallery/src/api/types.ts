type ImageItem = {
  id: string;
  height: number;
  width: number;
  alt_description: string;
  urls: {
    regular: string;
  };
};

export default ImageItem;