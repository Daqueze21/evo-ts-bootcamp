import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { increment,  decrement,  createSelectCounterNumber
// } from '../../store/reducers/Mars_Slice';
// import { RootState } from '../../store/reducers/store';

// style
import style from './MarsPhotosPage.module.scss';

function MarsPhotosPage(): JSX.Element {
  // const dispatch = useDispatch();
  // const { counterNumber } = useSelector(createSelectCounterNumber);
  // console.log(process.env);
  const [num, setNum] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Submitting Name ${num}`);
  };

  return (
    <div className={style.PhotosPage}>
      <form onSubmit={handleSubmit}>
        <input
          className={style.ControlsInput}
          type="number"
          min="10"
          max="100"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <input className={style.ControlsSendBtn} type="submit" value="Submit" />
      </form>

      <div className={style.MarsPhotosPage}>
        <div className={style.PhotoCard}>
          <img
            className={style.photo}
            src="https://images.unsplash.com/photo-1610302521242-ce3cbe33f60e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt="mars"
          />
          {/* <Like id={id} /> */}
          <span className={style.title}>Rover: roverName, Camera: cameraName</span>
        </div>
        <div className={style.PhotoCard}>
          <img
            className={style.photo}
            src="https://images.unsplash.com/photo-1610302521242-ce3cbe33f60e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt="mars"
          />
          {/* <Like id={id} /> */}
          <span className={style.title}>Rover: roverName, Camera: cameraName</span>
        </div>
        <div className={style.PhotoCard}>
          <img
            className={style.photo}
            src="https://images.unsplash.com/photo-1610302521242-ce3cbe33f60e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt="mars"
          />
          {/* <Like id={id} /> */}
          <span className={style.title}>Rover: roverName, Camera: cameraName</span>
        </div>
        <div className={style.PhotoCard}>
          <img
            className={style.photo}
            src="https://images.unsplash.com/photo-1610302521242-ce3cbe33f60e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt="mars"
          />
          {/* <Like id={id} /> */}
          <span className={style.title}>Rover: roverName, Camera: cameraName</span>
        </div>
        <div className={style.PhotoCard}>
          <img
            className={style.photo}
            src="https://images.unsplash.com/photo-1610302521242-ce3cbe33f60e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt="photo"
          />
          {/* <Like id={id} /> */}
          <span className={style.title}>Rover: roverName, Camera: cameraName</span>
        </div>
      </div>
    </div>
  );
}

export default MarsPhotosPage;
