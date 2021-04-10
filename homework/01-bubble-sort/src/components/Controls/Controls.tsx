import React from 'react';
import Button from './Button/Button';

//style
import './Controls.css';

type Props = {
  isFinished: boolean;
  pause: boolean;
  startPause: (e: React.MouseEvent) => void;
  newSet: (e: React.MouseEvent) => void;
};

const Controls: React.FC<Props> = ({
  isFinished,
  pause,
  startPause,
  newSet,
}) => {
  const pauseSort = pause ? (
    <Button onClick={startPause} disabled={isFinished}>
      Pause
    </Button>
  ) : (
    <Button onClick={startPause} disabled={isFinished}>
      Start
    </Button>
  );

  return (
    <div className='Controls'>
      <Button onClick={newSet}>New set</Button>
      {pauseSort}
    </div>
  );
};

export default Controls;