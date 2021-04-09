import React, { Component } from 'react';
import Header from './components/Header/Header';
import Status from './components/Status/Status';
import Controls from './components/Controls/Controls';

//style
import './App.css';

//types
type Props = {
};

type State = {
  status: boolean;
  pause: boolean;
};

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { status: false, pause: false };
  }

  newSetHandler = () => {
    console.log('new set');
  };

  pauseHandler = () => {
    this.setState((prevState) => {
      return { pause: !prevState.pause };
    });
  };

  render(): React.ReactNode {
    return (
      <div className='App'>
        <Header />
        <Controls
          pause={this.state.pause}
          startPause={this.pauseHandler}
          newSet={this.newSetHandler}
        />
        <Status status={this.state.status} />
      </div>
    );
  }
}

export default App;
