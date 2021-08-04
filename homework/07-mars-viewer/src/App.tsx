import React from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MarsPhotosPage from './components/MarsPhotosPage/MarsPhotosPage';
// import FunFact from './components/FunFact';
import Header from './components/Header/Header';

// style
import style from './App.module.scss';

function App() {
  return (
    <div className={style.App}>
      <Router>
        <Header />

        <main className={style.main}>
          {/* control panel */}
          <Route path="/Photos">
            <MarsPhotosPage />
          </Route>
          <Route path="/Favorite">
            <div className="favorite">favorite</div>
          </Route>

          <Route exact path="/" render={() => <Redirect to="/Photos" />} />
        </main>
      </Router>
    </div>
  );
}

export default App;
