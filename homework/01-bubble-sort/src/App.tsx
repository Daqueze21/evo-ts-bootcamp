import React, { Component } from 'react';
import Header from './components/Header/Header';
import Status from './components/Status/Status';
import Controls from './components/Controls/Controls';
import VisualizationChart from './components/VisualizationChart/VisualizationChart';
import {
  bubbleSortStep,
  initState,
  isEqualArrays
} from './lib/utils/utils';

//style
import './App.css';

//types
type Props = {
};

export type StateTypes = {
  isFinished: boolean;
  IsRunning: boolean;
  chartArray: number[];
};

class App extends Component<Props, StateTypes> {
  constructor(props: Props) {
    super(props);
    this.state = initState();
  }

  private timer?: NodeJS.Timer;

  private newSetHandler = () => {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.setState(initState());
  };

  private pauseHandler = (): void => {
    this.state.IsRunning ? this.pause() : this.sortingStart();
  };

  private pause = (): void => {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.setState({ IsRunning: false });
  };

  private sortingStart = (): void => {
    this.setState({ IsRunning: true });
    this.timer = setInterval(() => this.sortingStep(), 100);
  };

  private sortingStep = (): void => {
    const sortedArray = bubbleSortStep(this.state.chartArray);

    if (isEqualArrays(this.state.chartArray, sortedArray)) {
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.setState({
        isFinished: true,
      });
      return;
    }
    this.setState({ chartArray: sortedArray });
  };

  public render(): React.ReactNode {
    const { IsRunning, isFinished, chartArray } = this.state;
    const { pauseHandler, newSetHandler } = this;

    return (
      <div className='App'>
        <Header />
        <VisualizationChart chart={chartArray} />
        <Controls
          isFinished={isFinished}
          pause={IsRunning}
          startPause={pauseHandler}
          newSet={newSetHandler}
        />
        <Status status={isFinished} />
      </div>
    );
  }
}

export default App;
