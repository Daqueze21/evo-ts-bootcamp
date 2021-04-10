import React, { Component } from 'react';
import Header from './components/Header/Header';
import Status from './components/Status/Status';
import Controls from './components/Controls/Controls';
import VisualizationChart from './components/VisualizationChart/VisualizationChart';
import { generateChartArray} from './lib/utils/utils';

//style
import './App.css';

//types
type Props = {
};

type State = {
  isFinished: boolean;
  IsRunning: boolean;
  chartArray?: number[];
};

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isFinished: false,
      IsRunning: false,
      chartArray: [],
    };
  }

  componentDidMount() {
    console.log('did');
    
    this.newSetHandler();
  }

  newSetHandler = () => {
    this.setState({
      chartArray: generateChartArray(),
      isFinished: false,
      IsRunning: false,
    });
  };

  pauseHandler = () => {
    this.setState((prevState) => {
      return { IsRunning: !prevState.IsRunning };
    });
    console.log('pause');
  };

  render(): React.ReactNode {
    return (
      <div className='App'>
        <Header />
        <VisualizationChart chart={this.state.chartArray} />
        <Controls
          pause={this.state.IsRunning}
          startPause={this.pauseHandler}
          newSet={this.newSetHandler}
        />
        <Status status={this.state.isFinished} />
      </div>
    );
  }
}

export default App;
