import React from 'react';
import styled from 'styled-components';

type ImageProps = {
  image: string;
  width: number;
  height: number;
  description: string;
};

type ImageState = {
  width: number;
  height: number;
};

const Div = styled.div<ImageState>`
  margin: 2px;
  width: ${(props) => Math.floor((props.width * 250) / props.height)}px;
  flex-grow: ${(props) => Math.floor((props.width * 250) / props.height)};
`;

const Img = styled.img`
  width: 100%;
  vertical-align: bottom;
`;

class GalleryItem extends React.Component<ImageProps, ImageState> {
  private readonly imageRef: React.RefObject<HTMLImageElement>;
  state = { width: 0, height: 0 };

  constructor(props: ImageProps) {
    super(props);
    this.imageRef = React.createRef();
  }

  onLoad = () => {
    const img = this.imageRef.current;
    this.setState({
      width: img?.naturalWidth || 0,
      height: img?.naturalHeight || 0,
    });
  };

  public render(): React.ReactNode {
    return (
      <Div {...this.state}>
        <Img
          onLoad={this.onLoad}
          ref={this.imageRef}
          src={this.props.image}
          alt={this.props.description}
        />
      </Div>
    );
  }
}

export default GalleryItem;
