import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/index';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// id: 811024,
// sol: 1,
// camera: {
// id: 33,
// name: "EDL_RUCAM",
// rover_id: 8,
// full_name: "Rover Up-Look Camera"
// },
// img_src: "https://mars.nasa.gov/mars2020-raw-images/pub/ods/surface/sol/00001/ids/edr/browse/edl/EUF_0001_0667022666_963ECV_N0010052EDLC00001_0010LUJ01_1200.jpg",
// earth_date: "2021-02-19",
// rover: {
// id: 8,
// name: "Perseverance",
// landing_date: "2021-02-18",
// launch_date: "2020-07-30",
// status: "active"
// }
