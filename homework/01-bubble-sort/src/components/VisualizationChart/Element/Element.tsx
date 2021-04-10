import React from 'react';
import './Element.css';

type Props = {
  height?: number;
};

const Element: React.FunctionComponent<Props> = ({ height }) => {
  const styles = { height: `${height}px` };
  return <div className='Element' style={styles}></div>;
};

export default Element;
