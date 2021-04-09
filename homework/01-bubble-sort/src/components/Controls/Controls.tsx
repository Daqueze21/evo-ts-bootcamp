import React from 'react';
import Button from './Button/Button';

//style
import './Controls.css';

type Props = {
  pause: boolean;
  startPause: (e: React.MouseEvent) => void;
  newSet: (e: React.MouseEvent) => void;
};

const Controls: React.FC<Props> = ({ pause, startPause, newSet }) => {
  const pauseSort = pause ? (
    <Button onClick={startPause}>Pause</Button>
  ) : (
    <Button onClick={startPause}>Start</Button>
  );

  
  return (
    <div className='Controls'>
      <Button onClick={newSet}>New set</Button>
      {pauseSort}
    </div>
  );
};

export default Controls;